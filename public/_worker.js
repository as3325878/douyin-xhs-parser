import runApp from '../netlify/functions/_app.mjs';

const PAGE = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="referrer" content="no-referrer">
<meta name="theme-color" content="#ffffff">
<title>无水印视频下载</title>
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
.playbtn{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#16181d;border:1.4px solid #d7dbe1;border-radius:11px;padding:10px 14px;font-size:14px;font-weight:600;font-family:inherit;cursor:pointer}
.playbtn span{font-weight:400;opacity:.5;font-size:12.5px}
.playbtn.on{background:#16181d;color:#fff;border-color:#16181d}
.player{margin-top:12px;border-radius:12px;overflow:hidden;background:#000}
.player video{display:block;width:100%;max-height:62vh;background:#000}
.ptip{margin:9px 2px 0;font-size:12.5px;color:#6b7280;line-height:1.65}
.ptip b{color:#16181d;font-weight:600}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:12px}
.grid a{display:block;border-radius:8px;overflow:hidden;background:#0f1115}
.grid img{display:block;width:100%;aspect-ratio:1;object-fit:cover}
.note{margin-top:12px;font-size:12.5px;color:#9aa1ac}
.wx{margin:0 0 12px;background:#fff7e6;border:1px solid #ffe1a8;color:#8a5a00;font-size:13px;border-radius:12px;padding:10px 12px;line-height:1.6;display:none}
.wx.on{display:block}
.toast{position:fixed;left:50%;bottom:calc(56px + env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(20,22,28,.92);color:#fff;font-size:14px;padding:10px 16px;border-radius:10px;opacity:0;transition:opacity .25s;pointer-events:none;max-width:82vw;text-align:center;z-index:9}
.toast.on{opacity:1}
footer{margin-top:26px;text-align:center;font-size:12.5px;color:#8b929e;line-height:1.8}
.dim{color:#aab1bb}
.badge{display:inline-block;font-size:11.5px;background:#f1f2f4;color:#5b6472;border-radius:6px;padding:2px 7px;margin-right:6px;vertical-align:1px}
</style>
</head>
<body>
<div class="wrap">
  <div class="wx" id="wx">检测到你在微信内打开：微信经常无法直接下载文件。建议点右上角「···」，选择「在浏览器打开」后再下载。</div>
  <header>
    <h1>无水印视频下载</h1>
    <p class="sub">粘贴分享链接或整段分享文案，粘进去后自动开始分析</p>
  </header>

  <section class="card">
    <textarea id="q" placeholder="例如：7.31 复制打开抖音，看看【xxx的作品】 https://v.douyin.com/xxxx/" autocomplete="off" spellcheck="false"></textarea>
    <div class="row">
      <button class="ghost" id="paste" type="button">粘贴</button>
      <button class="primary" id="go" type="button">点这里下载</button>
    </div>
  </section>

  <div class="msg" id="msg"></div>
  <div id="out"></div>

  <footer>
    支持 抖音 · 快手 · B站 · 微博 · TikTok · YouTube 等<br>
    <span class="dim">分析出的直链由平台签发，有时效，过期重新分析即可</span>
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

  function ratioLabel(r) {
    var s = String(r || '');
    if (/origin/i.test(s) || !s) return '原画';
    var m = s.match(/(\\d{3,4})/);
    if (m) return m[1] + 'p';
    return s.replace(/[_-]+/g, ' ');
  }

  function showMsg(t) {
    msg.textContent = t || '';
    msg.className = t ? 'msg on' : 'msg';
  }

  var toastEl = document.createElement('div');
  toastEl.className = 'toast';
  document.body.appendChild(toastEl);
  var toastTimer = null;
  function toast(t) {
    toastEl.textContent = t;
    toastEl.className = 'toast on';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.className = 'toast'; }, 2800);
  }

  function proxyName(title, ratio) {
    var ext = '.mp4';
    var n = String(title || 'video').replace(/[\\\/:*?"<>|\s]+/g, ' ').trim().slice(0, 60) || 'video';
    return n + ' ' + ratioLabel(ratio) + ext;
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
      var vs = v.variants && v.variants.length ? v.variants : [{ ratio: 'origin', url: v.url, size: v.size }];
      var shown = 0;
      for (var j = 0; j < vs.length && shown < 4; j++) {
        var x = vs[j];
        if (!x || !x.url || seen[x.url]) continue;
        seen[x.url] = 1;
        var label = x.ratio ? ratioLabel(x.ratio) : '原画';
        var href = '/download?u=' + encodeURIComponent(x.url) + '&n=' + encodeURIComponent(proxyName(d.title, x.ratio));
        html += '<a class="dl' + (shown ? ' alt' : '') + '" href="' + esc(href) + '">下载 ' + esc(label) + '<span>' + bytes(x.size) + '</span></a>';
        shown++;
      }
      var playUrl = v.url || (vs[0] && vs[0].url) || '';
      if (playUrl) {
        html += '<button class="playbtn" type="button" data-u="' + esc(playUrl) + '" data-p="' + esc(v.coverUrl || '') + '">▶ 页面播放<span>长按存相册</span></button>';
      }
      html += '</div>';
      if (d.expiresAt) {
        var t = new Date(d.expiresAt * 1000);
        html += '<p class="note">直链有效期至 ' + t.toLocaleString('zh-CN', { hour12: false }) + '，过期重新分析</p>';
      }
      html += '</div></div>';
    }

    if (!html) {
      html = '<div class="card res"><div class="body"><p class="meta">没有分析到可下载的内容</p></div></div>';
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
    go.textContent = '下载中…';

    fetch('/parse?url=' + encodeURIComponent(url), { headers: { accept: 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j && j.success) { render(j.data); return; }
        var code = (j && j.error && j.error.code) || '';
        showMsg(ERR[code] || (j && j.error && j.error.message) || '分析失败，换个链接试试');
      })
      .catch(function () { showMsg('网络异常，请重试'); })
      .then(function () { go.disabled = false; go.textContent = '点这里下载'; });
  }

  // 页面内播放：iOS 上长按正在播放的视频可直接「存储视频」存进相册
  out.addEventListener('click', function (e) {
    var target = e.target;
    var b = target && target.closest ? target.closest('.playbtn') : null;
    if (!b) return;
    var u = b.getAttribute('data-u') || '';
    if (!u) return;

    var old = document.getElementById('player');
    if (old && old.parentNode) old.parentNode.removeChild(old);

    if (b.getAttribute('data-on') === '1') {
      b.setAttribute('data-on', '0');
      b.className = 'playbtn';
      return;
    }
    b.setAttribute('data-on', '1');
    b.className = 'playbtn on';

    var btns = b.parentNode;
    var wrap = document.createElement('div');
    wrap.className = 'player';
    wrap.id = 'player';

    var vd = document.createElement('video');
    vd.src = '/stream?u=' + encodeURIComponent(u);
    vd.controls = true;
    vd.setAttribute('playsinline', '');
    vd.setAttribute('webkit-playsinline', '');
    vd.setAttribute('x5-playsinline', '');
    vd.setAttribute('preload', 'metadata');
    var poster = b.getAttribute('data-p') || '';
    if (poster) vd.setAttribute('poster', poster);
    wrap.appendChild(vd);

    var tip = document.createElement('p');
    tip.className = 'ptip';
    tip.innerHTML = 'iPhone：长按上面的视频 → 选「<b>存储视频</b>」即可直接存进相册；安卓：点视频右下角「⋮」→「下载」。';
    wrap.appendChild(tip);

    btns.parentNode.insertBefore(wrap, btns.nextSibling);
    btns.parentNode.insertBefore(tip, wrap.nextSibling);

    vd.addEventListener('error', function () {
      tip.innerHTML = '视频加载失败，直链可能已过期，请回到上面重新点一次下载按钮。';
    });
    try { vd.play(); } catch (err) {}
    setTimeout(function () {
      try { wrap.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (err2) {}
    }, 120);
  });

  go.addEventListener('click', run);
  q.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') run();
  });

  // 输入框一旦出现链接就自动分析（微信里无法自动读剪贴板，
  // 用户长按粘贴完成后无需再点“分析”）
  var autoTimer = null;
  q.addEventListener('input', function () {
    if (autoTimer) clearTimeout(autoTimer);
    autoTimer = setTimeout(function () {
      var v = extractUrl(q.value);
      if (/^https?:/i.test(v) && !go.disabled) run();
    }, 500);
  });

  past.addEventListener('click', function () {
    function fallback() {
      q.focus();
      toast('已聚焦输入框：长按输入框选「粘贴」，松手后自动开始分析');
    }
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(function (t) {
        if (t && String(t).trim()) {
          q.value = String(t).trim();
          q.focus();
          run();
        } else {
          fallback();
        }
      }).catch(fallback);
    } else {
      fallback();
    }
  });

  if (/MicroMessenger/i.test(navigator.userAgent)) {
    document.getElementById('wx').className = 'wx on';
  }
})();
</script>
</body>
</html>`;

const json = (obj, status) =>
  new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

// 仅允许代理主流平台的 CDN 域名，防止被当作开放代理滥用
const CDN_HOSTS = [
  'douyinvod.com', 'douyinpic.com', 'douyin.com', 'snssdk.com', 'zjcdn.com',
  'ixigua.com', 'bytedance.com', 'toutiao.com',
  'xhscdn.com', 'xiaohongshu.com',
  'kwaicdn.com', 'gifshow.com', 'ksapisrv.com',
  'bilivideo.com', 'hdslb.com', 'bilibili.com',
  'weibocdn.com', 'miaopai.com',
  'tiktokcdn.com', 'tiktokv.com', 'akamaized.net',
  'cdninstagram.com', 'fbcdn.net',
  'googlevideo.com', 'ytimg.com',
];

function isAllowedTarget(u) {
  try {
    const parsed = new URL(u);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return false;
    const h = parsed.hostname;
    return CDN_HOSTS.some((d) => h === d || h.endsWith('.' + d));
  } catch {
    return false;
  }
}

async function proxyMedia(request, url, inline) {
  const target = url.searchParams.get('u') || '';
  let name = url.searchParams.get('n') || 'video.mp4';
  name = name.replace(/[\\\/:*?"<>|\r\n]/g, '_').slice(0, 90) || 'video.mp4';

  if (!isAllowedTarget(target)) {
    return json({ error: 'UNSUPPORTED_TARGET', message: '该地址不在允许下载的域名内' }, 400);
  }

  const headers = new Headers({
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    'referer': 'https://www.douyin.com/',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
  });
  const range = request.headers.get('range');
  if (range) headers.set('range', range);

  let upstream;
  try {
    upstream = await fetch(target, { headers, redirect: 'follow' });
  } catch (err) {
    return json({ error: 'UPSTREAM_ERROR', message: String((err && err.message) || err) }, 502);
  }

  if (upstream.status === 403 || upstream.status === 401) {
    return json({ error: 'LINK_EXPIRED', message: '直链已失效，请回到分析页重新分析' }, 502);
  }
  if (!upstream.ok && upstream.status !== 206) {
    return json({ error: 'UPSTREAM_ERROR', message: '上游返回 ' + upstream.status }, 502);
  }

  const out = new Headers();
  for (const h of ['content-type', 'content-length', 'content-range', 'accept-ranges', 'etag', 'last-modified']) {
    const v = upstream.headers.get(h);
    if (v) out.set(h, v);
  }
  // 播放模式不设 attachment，否则 iOS/微信会把它当成文件而不给 <video> 播
  if (!inline) {
    out.set('content-disposition', "attachment; filename*=UTF-8''" + encodeURIComponent(name));
  }
  if (!out.get('content-type')) out.set('content-type', 'video/mp4');
  out.set('cache-control', 'no-store');

  return new Response(upstream.body, { status: upstream.status, headers: out });
}

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

    // 媒体代理：服务器端补齐 Referer/UA 绕过平台 CDN 的防盗链。
    // /download 返回 attachment（浏览器直接存文件）；
    // /stream 返回 inline（供页面内 <video> 播放，iOS 可长按「存储视频」进相册）
    if (url.pathname === '/download' || url.pathname === '/stream') {
      return proxyMedia(request, url, url.pathname === '/stream');
    }

    try {
      return await runApp(request);
    } catch (err) {
      return json({ error: String((err && err.message) || err) }, 500);
    }
  },
};
