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
| `/parse` | POST | 解析，body: `{"url":"分享链接"}` |
| `/health` | GET | 健康检查 |
| `/platforms` | GET | 支持的平台列表 |
| `/status` | GET | 状态检测页 |

## 支持平台

抖音 ✅（已验证）· 快手 · 小红书 · B站 · 微博 · X · YouTube · Instagram · TikTok

> B站、微博等对机房 IP 风控较严，Cloudflare/Netlify 出口可能被拦，属平台侧限制。

## 本地测试

```bash
npm install
node -e "
const {handler}=await import('./netlify/functions/parse.mjs');
const r=await handler({path:'/health',httpMethod:'GET',headers:{host:'x'}});
console.log(r.statusCode, r.body);
" --input-type=module
```

## 结构

```
netlify.toml              部署与重定向配置
netlify/functions/parse.mjs   适配层（event → Request → Response）
netlify/functions/_app.mjs    解析核心（已打包）
netlify/functions/index.html  界面
public/                   静态页面（同上，供直出）
```

*仅供个人学习收藏使用，请勿商用或二次传播。*
