---
title: jQuery基础
tags: jQuery
categories: JavaScript
data: 2017/9/16
---
> CDN 方式引入 jQuery
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>

## 选择器操作 DOM 节点
* $("选择器"); 可以通过选择器选择 DOM 节点
* jQuery("h1"); 等同于 $("h1"); 返回 h1
* $("h1").text(); 返回 h1 里面的 text
* $("h1").text("Hello World!") 更改覆盖 h1 的内容

**注意DOM 加载完成之后 jQuery 开始运行，否则 jQuery 操作会被覆盖，不会生效。**
```javascript
// 文档加载完成后执行替换方法
jQuery(document).ready(function(){
    $("h1").text("Hello World!);
});
// 或者使用以下方法
$(document).ready(function(){
    $("h1").text("Hello World!);
});
```

### 伪类选择器
```javascript
.class li:first; // 选择列表里面的第一个元素
.class li:last; // 选择列表里面的最后一个元素
.class li:odd; // 选择列表里面的奇数位元素
.class li:even; // 选择列表里面的偶数位元素
```
## 遍历寻找操作 DOM 节点
> 速度快于选择器操作
```javascript
$(".class").find("li");
```
### 遍历伪类选择
```javascript
$(".class").first(); // 选择列表第一个元素
$(".class").last(); // 选择列表最后一个元素
$(".class").odd(); // 选择列表奇数位元素
$(".class").even(); // 选择列表偶数位元素
```
###  上下遍历

```javascript
$(".class").parent("li"); // 向上一层遍历，得到直系父元素
$(".class").children("li"); // 向下遍历，得到直系子元素
```