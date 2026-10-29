# 视频下载助手 · Netlify 版

粘贴短视频分享链接，解析无水印原片。纯服务端解析，单文件函数，部署即用。

## 部署到 Netlify（约 3 分钟）

1. 打开 https://app.netlify.com 用 GitHub 账号登录
2. **Add new site** → **Import an existing project** → **GitHub**
3. 选择本仓库 `douyin-xhs-parser`
4. 构建设置保持默认（`netlify.toml` 已配好），点 **Deploy**
5. 约 1 分钟完成，得到 `xxx.netlify.app` 网址

## 接口

| 路径 | 方法 | 说明 |
|---|---|---|
| `/` | GET | 手机端解析界面 |
| `/parse` | POST | 解析，body: `{"url":"分享链接"}`；也支持 `GET /parse?url=...` |
| `/health` | GET | 健康检查 |
| `/ready` | GET | 就绪探针（返回已注册平台数） |
| `/platforms` | GET | 支持的平台列表（含能力与签名器状态） |
| `/metrics` | GET | Prometheus 文本指标 |
| `/status` | GET | 状态检测页 |

## 支持平台

抖音 ✅（已验证，1.6MB MP4 实际下载通过）· 小红书 · 快手 · B站 · 微博 · X · YouTube · Instagram · TikTok

> B站（HTTP 412）、微博（Forbidden）对机房 IP 风控较严，Cloudflare / Netlify 出口常被拦，属平台侧限制，换服务器位置也未必能过。

## 本地测试

```bash
npm install
node --input-type=module -e "
const {handler}=await import('./netlify/functions/parse.mjs');
const r=await handler({path:'/health',httpMethod:'GET',headers:{host:'localhost','x-forwarded-proto':'https'}});
console.log(r.statusCode, r.body);
"
```

> ⚠️ `host` 头请用正常域名（如 `localhost`、`x.netlify.app`）。单字母主机名（如 `x`）会被 Elysia 判定为非法 Host 而返回 404，这是测试写法问题，不是真实部署问题。

## 免费版限制（实测要点）

| 项目 | 免费版 | 说明 |
|---|---|---|
| 函数执行时长 | 10 秒 | 抖音实测 0.2～0.5 秒，够用；遇到特别慢的链接可能超时 |
| 函数响应体积 | 约 6MB | 视频直链是 302/直连，不经过函数，不受影响 |
| 带宽 | 100GB/月 | 视频下载走平台 CDN，不消耗这里 |

## 结构

```
netlify.toml                  部署与重定向配置
netlify/functions/parse.mjs   适配层（event → Request → Response）
netlify/functions/_app.mjs    解析核心（已打包，0.9MB）
netlify/functions/index.html  界面（函数内直出用的副本）
netlify/functions/status.html 状态页副本
public/index.html             静态首页
public/status.html            静态状态页
package.json                  仅一个运行期依赖 pino
```

## 路由怎么走的

`netlify.toml` 里所有路径用 `status = 200` + `force = true` 重写到同一个函数 `/.netlify/functions/parse`。重写（rewrite）不改浏览器地址栏，函数里 `event.path` 仍是用户原始路径，所以 `/`、`/health`、`/parse` 由同一个函数按路径内部分发——**不需要**为每个接口单独建函数。

*仅供个人学习收藏使用，请勿商用或二次传播。*
