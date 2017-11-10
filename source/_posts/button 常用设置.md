---
title: button常用设置
tags: css
abbrlink: 91b6115c
---

# 鼠标样式

cursor：定网页浏览时用户鼠标指针的样式。

cursor：pointer； 设定鼠标的形状为一只伸出食指的手，这也是绝大多数浏览器里面鼠标停留在网页链接上方时候的样式。
default 箭头。
crosshair 十字
progress 沙漏

# 按钮颜色

平时的状态：
```css
.btn {
    // 未按下时的背景颜色
    background: #02b3e4;
    // 边框圆角
    border-radius: 4px;
    // 去掉边框
    border: none
    // 边缘阴影
    box-shadow: 12px 15px 20px rgba(0, 0, 0, 0.1);
    // 字体颜色
    color: #fff;
    // 显示方式
    display: inline-block;
    // 字体
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    // 字间距
    letter-spacing: 0.165em;
    // 超出隐藏
    overflow: hidden;
    // 设置渐变效果
    transition: 0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out, 0.2s border-color ease-in-out;
}
// 鼠标放上去时的颜色
.btn:hover:not(:disabled) { background: #148bb1;}
```
# 字体抗锯齿 -webkit-font-smoothing有
> CSS3中用于webkit引擎(如chrome)中设置字体的抗锯齿或者说光滑度的属性。

* none ------ 对低像素的文本比较好
* subpixel-antialiased ------默认值
* antialiased ------抗锯齿很好

# 文本溢出 text-overflow
> text-overflow 属性规定当文本溢出包含元素时发生的事情。
* clip	修剪文本。
  * ellipsis显示省略符号来代表被修剪的文本。
  * string使用给定的字符串来代表被修剪的文本。

# 文本转换 text-transform
> 转换不同元素中的文本。

* none	默认。定义带有小写字母和大写字母的标准的文本。
  * capitalize文本中的每个单词以大写字母开头。
  * uppercase定义仅有大写字母。
  * lowercase定义无大写字母，仅有小写字母。
  * inherit规定应该从父元素继承 text-transform 属性的值。

# 元素变形过渡效果 transition
> 设置元素渐变过渡，transition: property duration timing-function delay;需要加浏览器前缀。设置多个元素效果时用逗号隔开。
> http://www.w3school.com.cn/cssref/pr_transition.asp

* transition-property	规定设置过渡效果的 CSS 属性的名称。
  * transition-duration规定完成过渡效果需要多少秒或毫秒。
  * transition-timing-function规定速度效果的速度曲线。（http://www.w3school.com.cn/tiy/t.asp?f=css3_transition-timing-function2）
  * transition-delay定义过渡效果何时开始，过渡之前需要等待的实践。

**速度曲线设置**
* linear	规定以相同速度开始至结束的过渡效果。
  * ease规定慢速开始，然后变快，然后慢速结束的过渡效果。
  * ease-in规定以慢速开始的过渡效果。
  * ease-out规定以慢速结束的过渡效果。
  * ease-in-out规定以慢速开始和结束的过渡效果。

# 段落文本换行 white-space
> white-space 属性设置如何处理元素内的空白。
> http://www.w3school.com.cn/cssref/pr_text_white-space.asp

* normal	默认。空白会被浏览器忽略。
  * pre空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
  * nowrap文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
  * pre-wrap保留空白符序列，但是正常地进行换行。
  * pre-line合并空白符序列，但是保留换行符。
  * inherit规定应该从父元素继承 white-space 属性的值