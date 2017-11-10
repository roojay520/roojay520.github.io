---
title: css布局
tags: css
abbrlink: 5a252ba9
---

# CSS 基础布局

## 清除浮动
简单的 Micro clearfix 方法清除浮动，原文链接:http://nicolasgallagher.com/micro-clearfix-hack/
```scss
@mixin clearfix {
    &::before, &::after{
        content: " ";
        display: flex;
    }
    &::after {
        clear: both;
    }
}
```
## 三栏式布局

> 两边侧栏固定宽度，中间栏宽度自适应，并且中间栏要在放在文档流前面以优先渲染。
> 其父元素的高度始终是由三栏中高度最高的元素确定。

### 圣杯布局

> 来源于 Matthew Levine 于 2006 年发表在 Alistapart 上的一篇文章。[原文链接](https://alistapart.com/article/holygrail)

```html
<div class="container">
    <div class="box mid"></div>
    <div class="box left"></div>
    <div class="box right"></div>
</div>
```

1. 设置`box-mid` `box-left` `box-right` 三者向左浮动。
2. 设置`box-mid`宽度为 100%。
3. 设置负边距，`box-left`设置负左边距为 100%，`box-right`设置负左边距为负的自身宽度。
4. 设置`container`的`padding`值，给`box-left`和`box-right`留出空间。
5. 设置`left`和`right`为相对定位(position: relative).
6. 设置`box-left`的`left`值为负的`box-left`宽度，`box-right`的`right`值为负的`right`宽度。

Q:当面板的`mid`部分比两边的子面板宽度小的时候，布局会乱掉。
A:为`body`设置一个最小宽度。`body{min-width:700px;}`

### 淘宝双飞翼布局

> 淘宝双飞翼布局是一个经典的三栏式布局，
