---
title: for-in和for-of
data: date:2017-09-11 16:18:50
tags: javascript
---

## for-in
> `for-in`循环遍历的是对象的属性名称,可以将一个对象的属性循环遍历出来。
```javascript
var obj = {
    name: 'XiaoMing',
    age: 22,
    sex: 'man'
};
for(let key in obj){
    console.log(key); // 'name' 'age' 'sex'
}
```
数组也是对象，`for-in`可以直接循环遍历出`Array`的索引，索引类型为 String 而不是 Number。
```javascript
var array = ['a', 'b', 'c'];
for(let i in array){
    console.log(i); // 索引'0' '1' '2'
}
```