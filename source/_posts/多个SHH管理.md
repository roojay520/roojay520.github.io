---
title: 多个SSH管理
tags: SSH
categories: Git
abbrlink: 8ee164b8
data: 2017/9/16
---
## 多个 SSH key 管理

* 在创建ssh key的时候，将新的密钥进行重新命名，比如id_rsa_coding，使用下面的命令：
`ssh-keygen -t rsa -C "roojay520@gmail.com" -f ~/.ssh/id_rsa_coding`
b48684451cdeae15e70966c332895a1947144e1e

git config --global user.name "roojay"
git config --global user.email "roojay520@gmail.com"

git config --global user.name "roojay"
git config --global user.email "roojay@126.com"

STATIC_SITE_REPO https://github.com/roojay520/roojay520.github.io
TARGET_BRANCH master
GIT_USER_EMAIL roojay520@gmail.com
GIT_USER_NAME roojay