---
title: Dev Server
description: Snowpack 的 dev server 很快，因为它只对你修改的文件进行重新构建。由 ESM（ES modules）强力驱动。
---

![dev 命令输出示例](./snowpack-dev-startup-2.png)

`snowpack dev` - Snowpack's dev server is an instant dev environment for [unbundled development.](/concepts/how-snowpack-works) The dev server will build a file only when it's requested by the browser. That means that Snowpack can start up instantly (usually in **<50ms**) and scale to infinitely large projects without slowing down. In contrast, it's common to see 30+ second dev startup times when building large apps with a traditional bundler.

`snowpack dev` - Snowpack 的 dev server 是[非打包式开发](/concepts/how-snowpack-works)的一个即时 dev 环境。dev server 仅当浏览器请求时才会构建文件。这意味着 Snowpack 可以瞬间启动（通常在 **50ms 内**）并且可以扩展到无限大的项目而不会降速。与此相比，通过一个传统的打包器构建大型应用时，30 多秒的 dev 启动时间是很常见的。

Snowpack supports JSX & TypeScript source code by default. You can extend your build even further with [custom plugins](/plugins) that connect Snowpack with your favorite build tools: TypeScript, Babel, Vue, Svelte, PostCSS, Sass... go wild!

Snowpack 默认支持 JSX 和 TypeScript 源代码。你可以通过[自定义插件](/plugins)进一步扩展构建，以对接你所喜欢的构建工具：TypeScript、Babel、Vue、Svelte、PostCSS、Sass.....爽翻！
