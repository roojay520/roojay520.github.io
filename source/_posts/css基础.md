---
title: css基础
tags: CSS
categories: CSS
abbrlink: eda1a9a9
date: 2017-09-16
---

## CSS 导入

> 在 HTML 中引入 CSS 的方法主要有四种，它们分别是行内式、内嵌式、链接式和导入式。

1. 行内式
* 在标记的 style 属性中设定 CSS 样式。

```html
     <p style=color:white; background-color:blue;>
     Tihs is a test text.
     </p>
```

2. 内嵌式

* 将 CSS 样式集中写在网页的`<head></head>`中的`<style></style>`标签对中。

* 缺点是对于一个包含很多网页的网站，在每个网页中使用嵌入式，进行修改样式时非常麻烦。单一网页可以考虑使用嵌入式。

```html
     <head>
       <style type="text/css">
       p {
         color:red;
       }
       </style>
     </head>
```

3. 导入式

* 使用 CSS 的规则将外部CSS文件将一个独立的`.css`文件引入 HTML 文件中，`<style>` 标记写在 `<head>`标记中。

```html
   <style type="text/css">
   	@import "mystyle.css"
   </style>
```

4. 链接式

* 最常用的的一种方式。

```html
   <head>
     <link rel="stylesheet" href="src/test.css" type="text/css">
   </head>
```
## margin

> margin 属性为给定元素设置所有四个（上下左右）方向的外边距属性。四个外边距属性设置分别是： margin-top， margin-right， margin-bottom 和 margin-left 。指定的外边距允许为负数。

| 语法                          | 值       | 例子                    | 含义                              |
| ----------------------------- | -------- | ----------------------- | --------------------------------- |
| margin: style                 | 单值语法 | margin: 1em;            | 指定四周外边距都为1em             |
| margin: vertical horizontal   | 二值语法 | margin: 5% auto;        | 上下为5%，左右为auto              |
| margin: top horizontal bottom | 三值语法 | margin: 1em auto 2em;   | 上为1em，左右为auto，下为2em      |
| margin: top right bottom left | 四值语法 | margin: 2px 1em 0 auto; | 上为2px，右为1em，下为0，左为auto |

## 选择符

> 选择符用于定位我们想要样式化的网页 HTML 元素,可以选择一个或多个需要添加样式的元素。

| 选择符      | 选择内容                                   | 示例      |
| ----------- | ------------------------------------------ | --------- |
| 元素 选择符 | 标签内所有元素                             | p         |
| ID 选择符   | 指定ID的元素                               | #my-id    |
| Clss 选择符 | 指定Class的元素                            | .my-class |
| 属性 选择符 | 拥有指定属性的元素                         | img[src]  |
| 伪类 选择符 | 指定的元素，但是需要在特殊的状态，比如悬停 | a:hover   |

### 简单选择器（Simple selectors）

> 通过`元素类型`、`class`或 `id` 匹配一个或多个元素。

### 属性选择器（Attribute selectors）

> 通过`属性/属性值`匹配一个或多个元素。

* [attr]：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。
* [attr=val]：该选择器仅选择 attr 属性被赋值为 val 的所有元素。
* [attr~=val]：该选择器仅选择 attr 属性的值（以空格间隔出多个值）中有包含 val 值的所有元素，比如位于被空格分隔的多个类（class）中的一个类。
* [attr|=val] : 选择attr属性的值以val（包括val）或val-开头的元素。
* [attr^=val] : 选择attr属性的值以val开头（包括val）的元素。
* [attr$=val] : 选择attr属性的值以val结尾（包括val）的元素。
* [attr*=val] : 选择attr属性的值中包含字符串val的元素。

### 伪类（Pseudo-classes）

> 一个 CSS  伪类（pseudo-class） 是一个以冒号(:)作为前缀的关键字，当元素需要在特定状态下的设置表现样式时，往元素的选择器后面加上对应的伪类（pseudo-class）。
> 例如：页面上有一个链接， 有四种状态：

1. 未点击状态显示蓝色：

```css
a:link { color: blue; }
```

2. 已点击状态显示紫色：

```css
a:visited { color: purple; }
```

3. 鼠标悬停状态显示红色：

```css
a:hover { color: red;  }
```

4. 鼠标点击状态显示绿色：

```css
a:active { color: green; }

```

多个状态同时设置，按照以上先后顺序排列。

### 伪元素（Pseudo-elements）

> 以冒号(::)作为前缀的关键字，添加到选择器后面选择某个元素的某个部分。例如每个段落的第一个字，或者某个元素之前生成的内容。

* `::after`在已选中元素尾部创建最后一个子元素，通常会配合 content 属性来为该元素添加装饰内容。

```css
/*在链接后面加上一个箭头←*/
a::after { content: "←";}
```

* `::before` 在已选中元素头部创建第一个子元素。

```css
/*在链接前面加上一个箭头→*/
a::after { content: "→";}
```

* `::first-letter`会选中一整块文字第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格） 。

```css
/* 使每段开头的第一个字母变红变大 */
p::first-letter {  /* 使用:first来兼容IE8- */
  color: red;
  font-size: 130%;
}
```

* `::first-line`将样式只应用于一个元素的首行。首行文本的数量取决于元素的宽，document 的宽和文本的字号。
* `::first-line` 伪元素**只作用于块容器中**,所以`::first-line`伪元素只能在一个display值为block, inline-block, table-cell 或者 table-caption中有用.。在其他的类型中`::first-line`是不起作用的。
* `::selection`应用于文档中被用户选中高亮的部分（比如使用鼠标或其他选择设备选中的部分）,ecko 引擎需要加前缀（-moz）。

```css
/* 将被选中的任何文本渲染为金黄色和红色背景 */
::-moz-selection {
  color: gold;
  background: red;
}
::selection {
  color: gold;
  background: red;
}
```

### 组合器（Combinators）

> 以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，只选择 divs 的直系子节点的段落，或者直接跟在 headings 后面的段落。

| 组合器 | 选择值                                                                                                  |
| ------ | ------------------------------------------------------------------------------------------------------- |
| A,B    | 匹配同时满足A和B的任意元素                                                                              |
| A B    | 匹配任意元素，满足条件：B是A的后代结点（B是A的子节点，或者A的子节点的子节点）                           |
| A > B  | 匹配任意元素，满足条件：B是A的直接子节点                                                                |
| A + B  | 匹配任意元素，满足条件：B是A的下一个兄弟节点（AB有相同的父结点，并且B紧跟在A的后面）                    |
| A ~ B  | 匹配任意元素，满足条件：B是A之后的兄弟节点中的任意一个（AB有相同的父节点，B在A之后，但不一定是紧挨着A） |

### 多用选择器（Multiple selectors）

> 以逗号分隔开的多个选择器放在一个 CSS 规则下面， 以将一组声明应用于由这些选择器选择的所有元素。

## 盒模型

> 网页上的所有的元素都包含在一个个盒子中。在 CSS 里面设置它们的尺寸，颜色，位置等等。

* 内边距（padding）： 围绕着内容的空间（比如围绕段落的空间）
* 边框（border）：  紧接着内边距的实体线段
* 外边距(margin) ：  围绕元素外部的空间

 ![box](src/box-model.png)

* width：  属于一个元素的宽
* background-color： 元素内容和内边距之后的颜色
* color： 元素内容的颜色（通常是文本）
* text-shadow： 为元素内的文本设置阴影
* display：  设置元素的显示模式
* position：fixed  位置保持不动

## 单位长度

### px em

* px ：像素 (px) 是一种绝对单位（ absolute units）， 因为无论其他相关的设置怎么变化，像素指定的值是不会变化的。
* em ：相对长度单位，相对于当前文本内的字体尺寸。

### px 与em转换

任意浏览器的默认字体高度为 16px（16像素），所有未经调整的浏览器都符合: 1em=16px，那么10px=0.625em。<br>
为了简化font-size的换算，可以在 css 中的 body 选择器中声明 `font-size: 62.5%`，这时`10px=1em`。

## 阴影

> box-shadow 属性向元素添加一个或多个阴影。

```css
box-shadow: h-shadow v-shadow blur spread color inset;
```

| 值       | 含义                                   |
| -------- | -------------------------------------- |
| h-shadow | 必需。水平阴影。允许负值。             |
| v-shadow | 必需。垂直阴影。允许负值。             |
| blur     | 可选。模糊距离。                       |
| spread   | 可选。阴影尺寸。                       |
| color    | 可选。阴影颜色。                       |
| inset    | 可选。将外部阴影(outset)改为内部阴影。 |

## 布局

> 一个好的布局，能将网页内容更完美的展示出来。

### display 元素显示

> CSS 中最重要的控制布局的属性，用来设置一个元素应该如何显示，每一个元素都有一个默认的`display`值。
> 对于大多数元素它们的默认值通常是`block`或`inline`。

* block：块级元素。块级元素通常会占用容器的全部宽度，在其开始和结束位置都是换行符。常见的块级元素有：`h1`、`div`、`p`和`form`等，HTML5 中的新元素：`header`、`footer`和`section`等。
* inline：行内元素。行内元素只需要必要的宽度，不会强制换行打乱已有元素布局。常见的行内元素有：`span`和`a`。
* none：隐藏某个元素，且隐藏的元素不会占据任何空间。一些特殊元素的默认 display 值是它，例如 `script`。 `display:none` 通常被 JavaScript 用来在不删除元素的情况下隐藏或显示元素。

### visibility 元素可见性

visibility 属性有两种用法：

1. 值为`hidden`时隐藏元素，并将其所占空间用空白填充。
2. 值为`collapse`时隐藏表格的一行或一列，用于快速从表格中删除一行或一列。

* **`display:none`和`visibility:hidden`的区别：**
  * `display:none`隐藏某个元素时，隐藏的元素不会占据任何空间。
  * `visibility:hidden`可以隐藏元素，但是隐藏的元素仍然占用原来大小的空间。

## Google 原色

* 蓝色 #4285f3
* 红色 #ea4335
* 绿色 #34a853
* 黄色 #fbbc05
* 黑色 #1c262f

google蓝 #2196f3
按钮红 #f50057
google绿 #0f9d58