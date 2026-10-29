import runApp from '../netlify/functions/_app.mjs';

const PAGE = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#ffffff">
<title>无水印视频解析</title>
<style>
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;padding:0}
body{background:#f4f5f7;color:#16181d;font:16px/1.55 -apple-system,BlinkMacSystemFont,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",system-ui,sans-serif;padding:20px 16px 40px;padding-bottom:calc(40px + env(safe-area-inset-bottom))}
.wrap{max-width:640px;margin:0 auto}
header{padding:8px 4px 18px}
h1{font-size:24px;line-height:1.3;margin:0 0 6px;letter-spacing:-.3px}
.sub{margin:0;color:#6b7280;font-size:14px}
.card{background:#fff;border-radius:16px;box-shadow:0 1px 2px rgba(16,24,40,.06),0 8px 24px rgba(16,24,40,.06);padding:14px}
textarea{width:100%;border:1px solid #e5e7eb;background:#fafafa;border-radius:12px;padding:12px;font:15px/1.5 inherit;color:#16181d;resize:vertical;min-height:86px;outline:none;transition:border-color .15s,background .15s}
textarea:focus{border-color:#16181d;background:#fff}
.row{display:flex;gap:10px;margin-top:12px}
button{font:inherit;border:0;border-radius:12px;padding:13px 18px;cursor:pointer;transition:transform .08s,opacity .15s}
button:active{transform:scale(.98)}
.primary{flex:1;background:#16181d;color:#fff;font-weight:600}
.primary[disabled]{opacity:.55;cursor:default}
.ghost{background:#f1f2f4;color:#4b5563;padding:13px 16px}
.msg{margin:14px 2px 0;font-size:14px;color:#b42318;display:none}
.msg.on{display:block}
.res{margin-top:14px}
.cover{position:relative;border-radius:12px;overflow:hidden;background:#0f1115}
.cover img{display:block;width:100%;max-height:60vh;object-fit:contain}
.res .body{padding:14px 2px 2px}
.res h2{font-size:17px;line-height:1.45;margin:0 0 6px;font-weight:600;word-break:break-word}
.meta{margin:0;color:#6b7280;font-size:13px}
.btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.dl{display:inline-flex;align-items:center;gap:8px;text-decoration:none;background:#16181d;color:#fff;border-radius:11px;padding:11px 14px;font-size:14px;font-weight:600}
.dl span{font-weight:400;opacity:.72;font-size:12.5px}
.dl.alt{background:#eef0f3;color:#16181d}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:12px}
.grid a{display:block;border-radius:8px;overflow:hidden;background:#0f1115}
.grid img{display:block;width:100%;aspect-ratio:1;object-fit:cover}
.note{margin-top:12px;font-size:12.5px;color:#9aa1ac}
footer{margin-top:26px;text-align:center;font-size:12.5px;color:#8b929e;line-height:1.8}
.dim{color:#aab1bb}
.badge{display:inline-block;font-size:11.5px;background:#f1f2f4;color:#5b6472;border-radius:6px;padding:2px 7px;margin-right:6px;vertical-align:1px}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1>无水印视频解析</h1>
    <p class="sub">粘贴分享链接或整段分享文案，直接取无水印原片</p>
  </header>

  <section class="card">
    <textarea id="q" placeholder="例如：7.31 复制打开抖音，看看【xxx的作品】 https://v.douyin.com/xxxx/" autocomplete="off" spellcheck="false"></textarea>
    <div class="row">
      <button class="ghost" id="paste" type="button">粘贴</button>
      <button class="primary" id="go" type="button">解析</button>
    </div>
  </section>

  <div class="msg" id="msg"></div>
  <div id="out"></div>

  <footer>
    支持 抖音 · 快手 · B站 · 微博 · TikTok · YouTube 等<br>
    <span class="dim">解析出的直链由平台签发，有时效，过期重新解析即可</span>
  </footer>
</div>

<script>
(function () {
  var q = document.getElementById('q');
  var go = document.getElementById('go');
  var msg = document.getElementById('msg');
  var out = document.getElementById('out');
  var past = document.getElementById('paste');

  var ERR = {
    INVALID_URL: '链接格式不对，请重新复制分享链接',
    CONTENT_RESTRICTED: '作品不可见或已删除，换一个链接试试',
    CONTENT_NOT_FOUND: '链接已失效，请在 App 里重新分享一次',
    UPSTREAM_ERROR: '平台接口繁忙，稍等几秒再试',
    UNSUPPORTED_CONTENT: '暂不支持这个平台的内容',
    UNSUPPORTED_PLATFORM: '暂不支持这个平台'
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function extractUrl(t) {
    var m = String(t || '').match(/https?:\\/\\/[^\\s"'<>，。；）)】]+/);
    return m ? m[0] : String(t || '').trim();
  }

  function bytes(n) {
    if (!n) return '';
    var u = ['B', 'KB', 'MB', 'GB'], i = 0;
    while (n >= 1024 && i < u.length - 1) { n = n / 1024; i++; }
    return (n < 10 ? n.toFixed(1) : Math.round(n)) + u[i];
  }

  function dur(ms) {
    if (!ms) return '';
    var s = Math.round(ms / 1000), m = Math.floor(s / 60);
    s = s % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function showMsg(t) {
    msg.textContent = t || '';
    msg.className = t ? 'msg on' : 'msg';
  }

  function render(d) {
    var assets = d.assets || [];
    var html = '';

    for (var k = 0; k < assets.length; k++) {
      var a = assets[k];
      if (a.type === 'image') {
        if (!html) html += '<div class="card res"><div class="body"><h2>' + esc(d.title || '图文笔记') + '</h2><p class="meta">' + esc((d.author && d.author.name) || '') + '</p><div class="grid">';
        html += '<a href="' + esc(a.url) + '" target="_blank" rel="noopener"><img src="' + esc(a.url) + '" alt="" loading="lazy"></a>';
      }
    }
    if (html) html += '</div></div></div>';

    var v = null;
    for (var i = 0; i < assets.length; i++) {
      if (assets[i].type === 'video') { v = assets[i]; break; }
    }

    if (v) {
      var meta = [];
      if (d.author && d.author.name) meta.push(esc(d.author.name));
      if (v.durationMs) meta.push(dur(v.durationMs));
      if (v.width && v.height) meta.push(v.width + '×' + v.height);

      html += '<div class="card res">';
      if (v.coverUrl) html += '<div class="cover"><img src="' + esc(v.coverUrl) + '" alt=""></div>';
      html += '<div class="body">';
      html += '<h2>' + esc(d.title || '（无标题）') + '</h2>';
      html += '<p class="meta"><span class="badge">' + esc(d.platform) + '</span>' + meta.join(' · ') + '</p>';

      html += '<div class="btns">';
      var seen = {};
      var vs = v.variants && v.variants.length ? v.variants : [{ ratio: '原画', url: v.url, size: v.size }];
      var shown = 0;
      for (var j = 0; j < vs.length && shown < 4; j++) {
        var x = vs[j];
        if (!x || !x.url || seen[x.url]) continue;
        seen[x.url] = 1;
        var label = x.ratio ? String(x.ratio).replace(/_/g, ' ') : '原画';
        html += '<a class="dl' + (shown ? ' alt' : '') + '" href="' + esc(x.url) + '" target="_blank" rel="noopener">下载 ' + esc(label) + '<span>' + bytes(x.size) + '</span></a>';
        shown++;
      }
      html += '</div>';
      if (d.expiresAt) {
        var t = new Date(d.expiresAt * 1000);
        html += '<p class="note">直链有效期至 ' + t.toLocaleString('zh-CN', { hour12: false }) + '，过期重新解析</p>';
      }
      html += '</div></div>';
    }

    if (!html) {
      html = '<div class="card res"><div class="body"><p class="meta">没有解析到可下载的内容</p></div></div>';
    }
    out.innerHTML = html;
  }

  function run() {
    var raw = q.value.trim();
    if (!raw) { showMsg('先粘贴一条分享链接'); return; }
    var url = extractUrl(raw);
    if (!/^https?:/i.test(url)) { showMsg(ERR.INVALID_URL); return; }

    showMsg('');
    out.innerHTML = '';
    go.disabled = true;
    go.textContent = '解析中…';

    fetch('/parse?url=' + encodeURIComponent(url), { headers: { accept: 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j && j.success) { render(j.data); return; }
        var code = (j && j.error && j.error.code) || '';
        showMsg(ERR[code] || (j && j.error && j.error.message) || '解析失败，换个链接试试');
      })
      .catch(function () { showMsg('网络异常，请重试'); })
      .then(function () { go.disabled = false; go.textContent = '解析'; });
  }

  go.addEventListener('click', run);
  q.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') run();
  });
  past.addEventListener('click', function () {
    if (!navigator.clipboard || !navigator.clipboard.readText) { q.focus(); return; }
    navigator.clipboard.readText().then(function (t) { q.value = t; q.focus(); }).catch(function () { q.focus(); });
  });
})();
</script>
</body>
</html>`;

const json = (obj, status) =>
  new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) {
      const accept = request.headers.get('accept') || '';
      if (accept.includes('text/html')) {
        return new Response(PAGE, {
          headers: {
            'content-type': 'text/html; charset=utf-8',
            'cache-control': 'public, max-age=300',
          },
        });
      }
    }

    if (url.pathname === '/favicon.ico') {
      return new Response(null, { status: 204, headers: { 'cache-control': 'public, max-age=86400' } });
    }

    try {
      return await runApp(request);
    } catch (err) {
      return json({ error: String((err && err.message) || err) }, 500);
    }
  },
};
