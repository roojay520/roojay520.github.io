---
title: Win10配置免安装MySQL.md
date: 2017-06-20 22:36:45
tags: MySQL
---

1. #### 下载文件：

   到 MySQL 官网https://dev.mysql.com/downloads/mysql/下载免安装版本: DOWNLOADS → MySQL Community Server → Windows (x86, 64-bit), ZIP Archive

2. #### 创建配置文件：

   将下载的 ZIP 文件解压至想要安装 MySQL 的文件夹，创建 mysql.ini 配置文件，保存退出。
```ini
[mysql]
#设置mysql客户端默认字符集
default-character-set = utf8
[mysqld]
#设置3306端口
port = 3306
# 设置mysql的安装目录
basedir = C:\APPS\MySQL\mysql-5.7.18-winx64
# 设置mysql数据库的数据的存放目录
datadir = C:\APPS\MySQL\mysql-5.7.18-winx64\data
# 允许最大连接数
max_connections = 200
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server = utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine = INNODB
```
3. #### 设置环境变量：

   右键桌面计算机→属性→高级系统设置→环境变量→系统变量Path→添加 MySQL 的bin目录路径，例如：C:\APPS\MySQL\mysql-5.7.18-winx64\bin 保存退出。

4. #### 安装MySQL服务：

   a. 以管理员模式打开命令行窗口，安装MySQL服务：

   ```sql
   mysqld -install
   ```

   b. 初始化data目录：

   ```sql
   mysqld –-initialize
   ```

   c. 启动MySQL服务：

   ```sql
   net start MySQL
   ```

   d. 用户登录：

   ```sql
   mysql -u root -p
   ```

   e. 输入密码：

   初始随机密码存在于data目录下.err结尾的文件中，初始随机密码为root@localhost:后面的字符，例如：rCTmkIr:K65t

   ```SQL
   A temporary password is generated for root@localhost: rCTmkIr:K65t
   ```

   ​