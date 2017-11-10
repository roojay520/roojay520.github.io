---
title: git基础
tags: git
abbrlink: 9891ebc8
---

# git 操作指南
## git 基本操作
### git 基础命令
#### git 全局配置

```
git config —global	user.name "roojay"
git	config —global	user.email "roojay520@gmail.com"
```

#### 创建文件夹 test
```
mkdir test
```
#### 切换到 test 文件夹
```
 cd test
```
#### 新建 readme.md 文件
```
 touch readme.md
```

#### 初始化仓库
```
 git init
```
#### 查看仓库信息
```
 git status
```
#### 添加 readme.md 到缓存区
```
 git add readme.md
```
#### 将 readme.md 移除缓存区
```
 git rm	--cached readme.md
```
#### 删除 readme.md 文件

```
  rm readme.md
```

#### 删除文件 test 文件夹

```
 rm -r test
```
#### 提交文件到本地仓库
```
 git commit	-m 'first commit' //m 后面的 'fisrst commit' 表示提交信息
```
#### 查看操作日志
```
git	log
```
###  branch 操作
#### 查看本地分支

    git branch
#### 查看远程分支

```
git branch -r
```

#### 创建新分支 test

    git	branch test
#### 切换分支

    git	checkout test

#### 快速创建加切换

    git	checkout -b test
#### 删除本地分支
    git	branch	-d
    //强制删除本地分支
    git branch -D test
#### 删除远程分支

```
git push origin:testA
```
#### 远程分支迁至本地

```
git checkout testA origin/testA
```

#### 版本标签
```
git	tag //查看版本记录
git tag v1.0.0 //创建版本 v1.0.0 标签
git checkout v1.0.0 //切换到v1.0.0 版本状态
```
### 提交代码到 GitHub
#### 1.生成 SSH
```
ssh-keygen -t rsa
```
> 执行完以上命令后，在 C:/Users/Username/.ssh 文件下生成两个文件	id_rsa（密钥）	和	id_rsa.pub（公钥）

#### 2.GitHub 添加 SSH key

>  将 id_rsa.pub 的内容添加到	GitHub： Setting→SSH keys and GPG keys→New SSH key
>  输入	`ssh -T git@github.com`测试是否添加成功

#### 3. Push 推送
```
//将本地代码推到远程 master 分支
git push origin master
```
#### 4. Pull 拉取

```
//将远程 master 分支的代码拉取到本地
git pull origin master
```
#### 5. 提交代码
```
//clone 自己的项目
git	clone git@github.com:roojay520/test.git
//修改 test 项目代码
//commit 文件
git add change.md
git commit -m 'change file'
//推送到 GitHub
git	push origin	master
```
#### 6. 关联本地已有项目
> 假如我们需要把本地已有的 test1 项目的所有代码提交到 GitHub 上的 test	项目。

```
//将本地 test1 项目与远程 test 项目关联
git	remote add origin git@github.com:roojay520/test.git
//其中 orgin 是远程仓库的名字
//查看当前项目的远程仓库
git	remote -v
//向远程仓库提交代码
git push origin	master
```
## git 进阶

### 版本回退

* 在Git中，用`HEAD`表示当前版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。

* 使用`git reflog`用来查看命令历史，或者使用`git log`查看提交 log，找到提交的 ` commit id`。

* 使用`git reset`命令进行版本回退。

  ```
  //这个 HEAD 可以是具体的 commit id
  git reset --hard HEAD^
  ```

### 常用配置
#### 用户配置
> 全局设置用户名和用户邮箱
> user.name 用户名； user.email 用户邮箱
```
git	config --global	user.name "roojay"
git	config --global user.email "roojay520@gmail.com"
```
> 如果单独的某一个项目想要用特定的邮箱，切换到你的项目，以码把	--global 参数去除，执行一遍。
```
git	config user.name "roojay"
git	config user.email "roojay520@gmail.com"
```
#### 快捷配置 alias
>为命令设置别名
```
//切换 ck
git config --global alias.ck checkout #别名
//提交 cm
git config --global alias.cm commit
//查看信息 st
git config --global alias.st status
//分支 br
git config --global alias.br branch
```
> 组合命令

```
//推送 psm
git config --global alias.psm 'push origin master'
//拉取 plm
git config --global alias.plm 'pull origin master'
```

```
//个性日志输出 lg
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
//设置个性日志输出
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
```

### 合并分支
> rebase	跟 merge	的区别可以理解成有两个书架，需要把两个书架的书整理到一起去，第一种做法是	merge	，直接腾出一块地方把另一个书架的书全部放进去，这种做法你可以知道哪些书是来自另一个书架的；第二种做法就是 rebase	，他会把两个书架的书先进行比较，按照购书的时间来给他重新排序，然后重新放置好，这样做的好处就是合并之后的书架看起来很有逻辑，但是你很难清晰的知道哪些书来自哪个书架的。

#### merge 暴力合并
> 在 testA 分支开发完了一个功能，合并到主分支	master	上去
```
git checkout master
git merge testA
```

#### rebase 比较合并

```
git checkout master
git rebase testA
```
