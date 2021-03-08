---
title: 快速上手
description: 给想要尽快使用 Snowpack 的开发者的一个很基础的指南。
---

### Install Snowpack

### 安装 Snowpack

```bash
# npm:
npm install --save-dev snowpack
# yarn:
yarn add --dev snowpack
# pnpm:
pnpm add --save-dev snowpack
```

### Run the Snowpack CLI

### 执行 Snowpack CLI

```bash
npx snowpack [command]
yarn run snowpack [command]
pnpm run snowpack [command]
```

Throughout our documentation, we'll use `snowpack [command]` to document the CLI. To run your locally installed version of Snowpack, add the `npx`/`yarn run`/`pnpm run` prefix of the package manager that you used to install Snowpack.

在我们的全部文档中，我们会使用 `snowpack [command]` 来表示 CLI。在用于安装了 Snowpack 的包管理器前加上 `npx`/`yarn run`/`pnpm run` 可以运行局部安装的 Snowpack 版本。

For long-term development, the best way to use Snowpack is with a package.json script. This reduces your own need to remember exact Snowpack commands/configuration, and lets you share some common scripts with the rest of your team (if applicable).

对于长期开发，使用 Snowpack 的最佳方式是通过 package.json 的 scripts。这可以减少你需要准确记住 Snowpack 命令和配置的负担，并能让你和你团队的其他人共享一些共同的代码（如果适用的话）。

```js
// 推荐: package.json scripts
// npm run start (或: "yarn run ...", "pnpm run ...")
"scripts": {
    "start": "snowpack dev",
    "build": "snowpack build"
}
```

### Serve your project locally

### 为你的项目启动本地服务

```
snowpack dev
```

This starts the local dev server for development. By default this serves your current working directory to the browser, and will look for an `index.html` file to start. You can customize which directories you want to serve via the ["mount"](/reference/configuration) configuration.

这会为开发启动一个本地的 dev server。这默认会使用当前工作目录为浏览器提供服务，并查找 `index.html` 以启动。你可以通过 ["mount"](/reference/configuration) 配置来自定义你想要用作服务的目录。

### Build your project

### 构建你的项目

```
snowpack build
```

This builds your project into a static `build/` directory that you can deploy anywhere. You can customize your build via [configuration](/reference/configuration).

这会将你的项目构建到一个叫 `static/` 的目录，你可以将它布署到任何地方。你可以通过[配置](/reference/configuration)来自定义构建。

### See all commands & options

### 查看所有的命令和选项

```
snowpack --help
```

The --help flag will display helpful output.

`--help` 标记会展示有用的输出。
