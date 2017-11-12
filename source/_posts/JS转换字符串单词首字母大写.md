---
title: JS转换字符串单词首字母大写
tags: JavaScript
categories: JavaScript
abbrlink: e11bdebd
date: 2017-11-02 13:30:29
---

代码如下:
```javascript
const string = 'to young, too simple.';
const toUp = str => str.split(' ').map(item => item.charAt(0).toLocaleUpperCase() + item.slice(1)).join(' ');
toUp(string);
```