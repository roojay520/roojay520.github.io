---
title: VSCode 配置 ESLint + Airbnb + vue
tags:
    - VSCode
    - ESLint
categories: VSCode
abbrlink: 3bcc390e
date: 2017/10/1
---

## 基本环境

Win 10 v1709
Nodejs v8.70
VScode v1.17.2

## VSCode 安装 ESLint 扩展

打开 VSCode 搜索 ESLint 扩展安装

## NPM 安装 ESLint

1. 全局安装（推荐）:

  `npm install eslint -g`

2. 项目根目录本地安装：

  `npm install eslint --save-dev`

## 1. 自定义配置规则

1. 全局配置
在当前用户根目录下执行 `eslint --init`,根据个人爱好选择生成配置文件 `.eslintrc.json`
例如：`windows\user\username`

2. 项目根目录配置：
在当前用户根目录下执行 `eslint --init`，根据个人爱好选择生成配置文件

ps：具体配置参考：http://eslint.cn/docs/user-guide/configuring

## 2. 使用 eslint-config-airbnb 标准规则

1. 查看 Airbnb 标准依赖插件版本：

  `npm info "eslint-config-airbnb@latest" peerDependencies`

例如：本次的 plugins 的版本要求:

```
{  eslint: '^4.9.0',
  'eslint-plugin-import': '^2.7.0',
  'eslint-plugin-jsx-a11y': '^6.0.2',
  'eslint-plugin-react': '^7.4.0'
}
```
2. 安装对应版本的插件:

   `npm install eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# -g`

3. 更改配置文件 `.eslintrc.json` 如下：

```json
{
    // 要启用的环境
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    // 启用 airbnb 规则
    "extends": "airbnb",
    // 使用语言及版本
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    // 个人自定义规则
    "rules": {
        "no-console":"off",
        "no-plusplus":"off"
    }
}
```

## ESLint 支持 Vue 单文件组件

1. 安装 eslint-plugin-html 插件

`npm install eslint-plugin-html -g`

2. 在 VSCode 设置设置中添加如下配置：
```json
     // ESLint 配置
    "eslint.enable": true,
    // nodejs 路径， windows 路径使用双 \\ 进行转义
    "eslint.nodePath": "C:\\Dev\\nodejs",
    // 启用 eslint-plugin-html 插件
    "eslint.options": {
        "plugins": ["html"]
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        // 启用 html 和 vue 中 ESLint 验证和自动修复
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        }
  ```