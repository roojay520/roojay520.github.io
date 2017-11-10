---
title: Flex布局
tags: flex
abbrlink: ab688311
---
# Flex 布局
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
* Flex 是 Flexible Box 的缩写，意为“弹性布局”，为盒模型提供灵活的布局方式。
* 盒子中的子元素可以在各个方向上进行布局，并且能以弹性尺寸来适应显示空间。
* 弹性容器的每个子元素都称为弹性项目。弹性容器直接包含的文本将被包覆成匿名弹性单元。
* 元素的显示顺序可以与它们在源代码中的顺序无关。


## 基础

* flex 布局包括一个水平 main axis 和一个垂直 cross axis

![](https://mdn.mozillademos.org/files/12998/flexbox.png)

* 通过设置 display 的值启用 flex
* 设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

```css
	.box-flex{
		display： -ms-flex；
	    display: -webkit-flex;
	    display: flex;
	}
	.box-inline-flex{
		display: -ms-inline-flex;
	    display: -webkit-inline-flex;
		display: inline-flex;
	}
```

## flex 属性

* flex-direction：确立主轴。
* justify-content：定义了在当前行上，弹性项目沿主轴如何排布。
* align-items：定义了在当前行上，弹性项目沿侧轴默认如何排布。
* align-self：定义了单个弹性项目在侧轴上应当如何对齐，这个定义会覆盖由 align-items 所确立的默认值。

### flex-direction（主轴方向）
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)
> flex-direction 决定主轴方向（项目排列方向），包括四个值。
* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。

### flex-wrap（换行控制）
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png)
> 控制一条轴上放不下子项目该如何换行。

* nowrap（默认值）：不换行
* wrap：换行，第一行在上。
* wrap-reverse：换行，第一行在下。

### justify-content（主轴排列方式）
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)
* flex-start：从行首起始位置开始排列。
* flex-end：从行尾位置开始排列。
* center：居中排列。
* space-between：均匀排列每个元素
首个元素放置于起点，末尾元素放置于终点。
* space-around：均匀排列每个元素
每个元素周围分配相同的空间。

### align-items(侧轴排列方式)
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

* flex-start：元素向侧轴起点对齐。
* flex-end：元素向侧轴终点对齐。
* center：元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
* baseline: 项目的第一行文字的基线对齐。
* stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### align-conten（多轴线对齐方式）

> align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)
* flex-start：所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。
* flex-end：所有行从垂直轴末尾开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。
* center：所有行朝向容器的中心填充。每行互相紧挨，相对于容器居中对齐。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。
* space-between：所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。
* space-around：所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。
* stretch：拉伸所有行来填满剩余空间。剩余空间平均的分配给每一行。

## 子项目属性

* order：定义项目的排列顺序。数值越小，排列越靠前，默认为 0。
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)
* flex-grow：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)
* flex-shrink：定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。属性为 0，项目不缩小，负值对该属性无效。
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg)
* flex-basis：定义项目在主轴所占据的基本空间，默认值 auto，即项目本来的大小。
* flex：是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
* align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)