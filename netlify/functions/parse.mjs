// Netlify Functions 入口：把 Lambda 风格 event 适配成 Web Request，交给打包好的 Elysia 应用。
// 三个路由都由同一个应用处理：/（首页 HTML）、/health、/parse（以及 /ready /platforms /status /media）。
import app from './_app.mjs';

const runApp = app.default ?? app.handler ?? app;

/** 判断是否文本内容（需要按文本返回，其余走 base64） */
function isTextual(contentType) {
  if (!contentType) return false;
  return (
    /^text\//i.test(contentType) ||
    /application\/(json|javascript|xml|x-www-form-urlencoded)/i.test(contentType) ||
    /\+json|^application\/(ld\+json)/i.test(contentType)
  );
}

export const handlerMain = async event => {
  // 构造完整 URL：优先用 Netlify 提供的原始域名与路径
  const host = event.headers?.host || event.headers?.['x-forwarded-host'] || 'localhost';
  const proto = event.headers?.['x-forwarded-proto'] || 'https';
  const rawPath = event.path || '/';
  const qs = event.rawQuery ? `?${event.rawQuery}` : '';
  const url = `${proto}://${host}${rawPath}${qs}`;

  // 组装请求体
  let body;
  if (event.body) {
    body = event.isBase64Encoded ? Buffer.from(event.body, 'base64') : event.body;
  }

  // 复制请求头（剔除会干扰的 hop-by-hop 头）
  const headers = new Headers();
  for (const [k, v] of Object.entries(event.headers || {})) {
    const key = k.toLowerCase();
    if (key === 'host' || key === 'content-length' || key === 'connection') continue;
    if (v === undefined || v === null) continue;
    try {
      headers.set(k, Array.isArray(v) ? v.join(', ') : String(v));
    } catch {
      /* 忽略非法头 */
    }
  }

  let request;
  try {
    request = new Request(url, {
      method: event.httpMethod || 'GET',
      headers,
      body: ['GET', 'HEAD'].includes(event.httpMethod) ? undefined : body,
    });
  } catch (err) {
    return {
      statusCode: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        success: false,
        data: null,
        error: { code: 'INVALID_URL', message: '请求构造失败: ' + String(err?.message || err) },
      }),
    };
  }

  let response;
  try {
    response = await runApp(request);
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        success: false,
        data: null,
        error: { code: 'INTERNAL', message: String(err?.message || err) },
      }),
    };
  }

  // 回写响应头（多值头逐个拼接）
  const outHeaders = {};
  response.headers.forEach((value, key) => {
    outHeaders[key] = value;
  });

  const contentType = response.headers.get('content-type') || '';
  const buf = Buffer.from(await response.arrayBuffer());

  if (isTextual(contentType)) {
    outHeaders['content-type'] = contentType || 'text/plain; charset=utf-8';
    return {
      statusCode: response.status,
      headers: outHeaders,
      body: buf.toString('utf8'),
      isBase64Encoded: false,
    };
  }

  return {
    statusCode: response.status,
    headers: outHeaders,
    body: buf.toString('base64'),
    isBase64Encoded: true,
  };
};

// 兼容两种调用约定
export const handler = handlerMain;
export default handlerMain;
