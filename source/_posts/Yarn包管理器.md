---
title: 包管理器 Yarn
tags: Yarn
categories: Nodejs
abbrlink: 522f484
data: 2017/9/16
---
# 包管理器 Yarn

>Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具。

## 常用命令
* yarn和 yarn install ，这两个命令的效果是一样的，等同于npm install，使用这个命令会在该目录生成一个yarn.lock的文件。
* yarn add koa，安装koa模块并更新package.json和yarn.lock文件，等同于npm install koa --save。也可以使用yarn global add koa，等同于npm install koa -g，将模块直接安装到全局环境变量里，方便使用。
* yarn list，根据当前项目的package.json查看模块的依赖及版本。
* yarn info koa，查看koa模块的详细信息，类似于npm view koa。
* yarn init，初始化项目package.json文件，等同于npm init。
* yarn run，运行package.json中的script。