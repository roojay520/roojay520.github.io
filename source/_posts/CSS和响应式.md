---
title: css和响应式
tags: css
abbrlink: 343902f6
---

# css框架
## Bootstrap 框架
> Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。
http://www.runoob.com/bootstrap/bootstrap-tutorial.html

* 在 html head 开头引入下面代码：

```html
<head>
    <meta charset="UTF-8">
    <!--  兼容古老的 IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 响应式适应 ，width 属性控制设备的宽度显示， initial-scale=1确保网页加载时，以 1:1 的比例呈现，不会有任何的缩放，user-scalable=no 可以禁用其缩放（zooming）功能-->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <!-- CSS 样式重置 -->
    <link href="https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css" rel="stylesheet">
    <!-- 引入 Bootstrap css 压缩文件-->
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <!-- 引入自己 css 的文件 -->
    <link rel="stylesheet" href="../style/task_1.css">
    <title>Test</title>
</head>
```

## 响应式设计

> 根据不同像素屏幕，展示不同大小页面。

`!important` 为开发者提供了一个增加样式权重的方法。!important是对整条样式的声明，包括这个样式的属性和属性值。

**### 媒体查询**

```css
@media only screen and (max-width: 300px) {
    p {
        background-color: red;
    }
}
```

* only 兼容旧式浏览器。
* screen 表示这个媒体查询适用于所有屏幕。
* and 后面跟条件。
* **一般个@media样式要放在css样式表的最下面，不然会被相同样式覆盖。**

### CSS 样式重置

* 不同的浏览器在对于CSS没有定义的一些样式属性是不一样的
* 比如没有在自己的CSS里面规定超链接有没有下划线的时候，有些浏览器有，有些浏览器没有。
* 再比如有一些浏览器规定的超链接默认颜色是蓝色，有一些又是黑色。
* 而这个CSS的功能就是对几乎所有的默认样式进行重置，让所有的浏览器上对于未定义的样式浏览效果达到一致。

**使用方法：**

```html
<!-- 在自己的样式表前面引入以下 Normalize.css 360cdn 链接地址-->
<link href="https://lib.baomitu.com/normalize/7.0.0/normalize.min.css" rel="stylesheet">
```

### 网格设计

* 大部分网页采用 12 columns 设计，可以很好的划分为2，3，4等份。


## 文章字体

* segmentfault
```css
font-family: -apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif;

font-size: 14px;
```

* 知乎
```css
font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
font-size: 15px;
```

## 颜色

导航栏 #243d4c

背景 #eee
#f5f5f5
#f8f8f8
#ffffff

按钮 #02b3e4
#148bb1
#2D78BA

边框阴影
```css
.ss::before, .clss::before {
    bottom: 0;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
    content: '';
    display: block;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
}
```