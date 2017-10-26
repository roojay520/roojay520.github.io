---
title: MongoDB安装
date: 2017-09-17 22:09:17
tags: MongoDB
---
## MongoDB
安装使用:
1. 官网下载 MongoDB: https://www.mongodb.com/download-center#community
2. 选择 Custom 安装
3. 创建数据目录，**数据目录应该放在根目录下**(如: C:\ )。
data
├── db
│   ├── mongo.config
└── log
    └── MongoDB.log
4. 启动服务：`mongod --dbpath c:\data\db`， 由于windows power shell 限制，使用 `.\mongod --dbpath c:\data\db`命令。
5. 将 MongoDB 设为 windows 服务开机自启动：
`mongod.exe --bind_ip yourIPadress --logpath "C:\data\dbConf\mongodb.log" --logappend --dbpath "C:\data\db" --port yourPortNumber --serviceName "YourServiceName" --serviceDisplayName "YourServiceName" --install`
    * --bind_ip	绑定服务 IP，若绑定 127.0.0.1，则只能本机访问，不指定默认本地所有IP。
    * --logpath	指定 MongoDB 日志文件，注意是指定文件不是目录。
    * --logappend	使用追加的方式写日志。
    * --dbpath	指定数据库路径
    * --port	指定服务端口号，默认端口27017
    * --serviceName	指定服务名称
    * --serviceDisplayName	指定服务名称，有多个mongodb服务时执行。
    * --install	指定作为一个Windows服务安装。

##  Robo 3T
一个 Mongo 可视化工具，更便捷的操作 MongoDB 。
1. 下载安装：https://robomongo.org/download
1. windows 开启端口，控制面板 → 系统和安全 → Windows 防火墙 → 高级设置 → 入站规则 → 新建规则 → 端口 → 27017
1. 打开 Robo 3T → create  → 设置 name 为 localhost → 端口为 27017  → save → connect