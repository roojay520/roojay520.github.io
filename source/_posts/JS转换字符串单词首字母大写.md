---
title: JS转换字符串单词首字母大写
date: 2017-11-2 13:30:29
tags: javascript
---

代码如下:
```javascript
const string = 'to young, too simple.';
const toUp = str => str.split(' ').map(item => item.charAt(0).toLocaleUpperCase() + item.slice(1)).join(' ');
toUp(string);
```