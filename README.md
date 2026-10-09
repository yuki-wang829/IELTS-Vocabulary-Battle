# Silvia · Shinan IELTS

Silvia 的雅思阅读个人网站，包含教师资历、阅读学习介绍、学习需求摘要工具及现有词汇对战。

## 本地运行

```sh
npm install
npm run dev
```

## 构建与部署

```sh
npm run build
```

发布目录为 `dist`，可沿用 Vercel 的 Vite 设置。首页位于 `/`，原有双队词汇对战位于 `/vocabulary/`。Vite 配置同时构建两个页面，现有游戏源码保留在 `src/`。

学习需求摘要仅在浏览器中生成，不提交数据。个人照片在 `public/assets/`，资历来自老师提供的介绍素材。

Sites 私有预览和本仓库分别部署。自有域名 DNS 设置由域名服务商管理。
