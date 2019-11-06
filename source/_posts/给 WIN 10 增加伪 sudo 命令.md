---
title: 给 WIN 10 增加伪 sudo 命令
mathjax: true
abbrlink: c19490dd
tags: Windows
categories: Windows
date: 2018-01-06 12:22:35
---

1. 管理员权限打开 PowerShell
2. 更改 PowerShell 默认脚本执行策略.
    1. 输入`get-executionpolicy` 查看当前脚本执行策略, 当前默认为为 `Restricted` 即不允许执行任何脚本。
    2. 输入 `get-help set-executionpolicy`, 获取执行策略
    3. 输入`set-executionpolicy remotesigned` 更改执行策略为 `remotesigned`
3. 输入下面脚本命令执行:
```bash
$script_path="$HOME\Documents\Scripts"; if (!(test-path $script_path)) {New-Item -ItemType directory $script_path} if (!(test-path $profile)) { new-item -path $profile -itemtype file -force }". $script_path\sudo.ps1" | Out-File $profile -append; "function sudo(){if (`$args.Length -eq 1){start-process `$args[0] -verb `"runAs`"} if (`$args.Length -gt 1){start-process `$args[0] -ArgumentList `$args[1..`$args.Length] -verb `"runAs`"}}" | Out-File $script_path\sudo.ps1; powershell
```

4. 搜索 UAC 即更改用户账户控制设置, 设置为从不通知.

### Usage
```bash
sudo powershell
sudo cmd
```

参考链接: [Is there any 'sudo' command for Windows?](https://superuser.com/questions/42537/is-there-any-sudo-command-for-windows)