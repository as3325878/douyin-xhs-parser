// Cloudflare Pages 高级模式入口：所有路由交给打包好的应用处理
import runApp from '../netlify/functions/_app.mjs';

export default {
  async fetch(request, env, ctx) {
    try {
      return await runApp(request);
    } catch (err) {
      return new Response(JSON.stringify({ error: String((err && err.message) || err) }), {
        status: 500,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }
  },
};
