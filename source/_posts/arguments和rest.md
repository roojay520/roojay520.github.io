---
title: arguments和rest
tags: JavaScript
categories: JavaScript
abbrlink: e5332c52
data: 2017/9/16
---
## arguments 参数
> 只在函数内部起作用，指向当前函数调用者传入的所有参数。

```javascript
var bar = (x) => {
    console.log(x); // a
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]); // 根据参数索引打印参数
    }
};
bar('a', 'b', 'c');
```

* 利用`arguments`可以获得调用者传入的所有参数。
* `arguments`常用于判断传入参数个数。

## rest 不定参数
> JS 允许函数接收任意个参数，当参数个数不确定的情况下可以使用不定参数。
```javascript
"use strict"; // 严格模式
// 接受任意个参数返回它们的和
function sum(...rest) { // 不定参数写在参数最后，前面使用 ... 标识
  let result = 0;
  for (let i of rest) { // rest 是一个数组实例
      result += i;
  }
  console.log(result);
}
sum(1, 2, 3, 4); // 传入参数
```
不定参数写在参数最后，传入参数先绑定已有的参数，多余的参数以数组形式存入不定参数。