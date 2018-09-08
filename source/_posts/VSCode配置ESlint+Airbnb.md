---
title: VSCode 配置 ESLint + Airbnb + Vue
tags:
    - VSCode
    - ESLint
categories: VSCode
abbrlink: 3bcc390e
date: 2018-09-08
---

> 2018-09-08 更新，调整为 `eslint-config-airbnb-base` 正确配置。

## 基本环境

Win 10 v1709
Nodejs v8.11.3
VScode v1.26.1

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

## 2. 使用 eslint-config-airbnb-base 标准规则

1. 查看 Airbnb 标准依赖插件版本：

  `npm info "eslint-config-airbnb-base@latest" peerDependencies`

例如：本次的 plugins 的版本要求:

```
{  
  eslint: '^4.19.1 || ^5.3.0',
  eslint-plugin-import': '^2.14.0' 
}
```
2. 安装对应版本的插件:

   `npm install eslint-config-airbnb-base eslint@^#.#.# eslint-plugin-import@^#.#.# -g`
   
3. 安装  babel-eslint 插件：
    `npm i -g babel-eslint`

4. 更改配置文件 `.eslintrc.json` 如下：

```json
{
    // 要启用的环境
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    // 启用 airbnb 规则
    "extends": "airbnb-base",
    // 使用语言及版本
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    // 个人自定义规则
    "rules": {
        "no-console":"off",
        "no-plusplus":"off"
    }
}
```

## ESLint 支持 Html 以及 Vue 单文件组件

1. 安装 eslint-plugin-html 和 eslint-plugin-vue 插件

`npm i -g eslint-plugin-html eslint-plugin-vue`

2. 在 VSCode 设置设置中添加如下配置：
```json
     // ESLint 配置
    "eslint.enable": true,
    // 保存时是否自动修复
    "eslint.autoFixOnSave": false,
    // nodejs 路径， windows 路径使用双 \\ 进行转义
    "eslint.nodePath": "C:\\Dev\\nodejs",
    "eslint.options": {
        // 配置文件的地址
        "configFile": "C:\\Users\\roojay\\.eslintrc.json",
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
