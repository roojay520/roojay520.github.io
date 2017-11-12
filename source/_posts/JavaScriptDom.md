---
title: javascript DOM
tags: JavaScript
categories: JavaScript
abbrlink: 218ff168
data: 2017/9/16
---
## 消息窗口

* document.write(字符串或者变量或者 Html 标签); 直接在向 html 的输出流中写内容，直接在网页中输出容。
* alert(字符串或变量); 弹出一个包含确定的消息对话框。
![js-alert](https://i.loli.net/2017/10/26/59f1ff9e6f473.png)

* confirm(stri); 弹出一个包含确定和取消的消息对话框。
    * str 消息框显示的文本。
    * 返回值为 Boolean 类型，通过返回值判断用户点击了什么按钮，确定为 true ，取消为 false。
![js-confirm](https://i.loli.net/2017/10/26/59f1ffb53699b.png)

* prompt(str1, str2) 弹出包含一个确定按钮、取消按钮与一个文本输入框的消息对话框。
    * str1 消息框显示文本，不可修改。
    * str2 文本框中的内容，可修改。
    * 返回值：点击确定，文本框内容作为函数返回值。点击取消，返回 null。

* open() 方法可以查找一个已经存在或者新建的浏览器窗口。
    * window.open() 打开一个新窗口。
```javascript
    window.open([URL], [窗口名称], [窗口参数设置])
    /* URL(可选参数):网页网址或路径，如果它的值是空字符串，那么窗口就不显示任何文档。
    * 窗口名称(可选参数)：被打开窗口的名称。只能由字母，数字或下划线构成。
    * _balnk:新窗口打开； _self:当前窗口打开； _top：框架网页中在上部窗口中显示目标网页；
    * 相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
    */
```
    * 窗口参数 ：
| 参数       | 值      | 含义                     |
| ---------- | ------- | ------------------------ |
| top        | Number  | 窗口顶部离开屏幕顶部像素 |
| left       | Number  | 窗口顶部离开屏幕顶部像素 |
| width      | Number  | 窗口宽度                 |
| height     | Number  | 窗口高度                 |
| menubar    | yes，no | 窗口菜单                 |
| toolbar    | yes，no | 窗口工具栏               |
| scrollbars | yes，no | 窗口滚动条               |
| status     | yes，no | 窗口状态栏               |

* close() 关闭窗口

```javascript
    window.close(); // 关闭本窗口
    [对象窗口].close() // 关闭对象窗口
```

## JS HTML DOM
> 浏览器从服务器取到HTML网页以后， 会展示成页面让你看， 但是他的内部其实会把HTML组织成一个树给JS,这个树可以称为DOM。 例如这个页面：

* 浏览器从服务器取到HTML网页以后， 会展示成页面让你看， 但是他的内部其实会把HTML组织成一个树给JS,这个树可以称为DOM。 例如这个页面：

```html
<html>
 <head>
   <title>Sample Page</title>
 </head>
 <body>
   <p>hello world!</p>
 </body>
</html>
```
![full-html-tree](https://i.loli.net/2017/10/26/59f1ffc7e1cb1.png)

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML:
* JavaScript 能够改变页面中的所有 HTML 元素
* JavaScript 能够改变页面中的所有 HTML 属性
* JavaScript 能够改变页面中的所有 CSS 样式
* JavaScript 能够对页面中的所有事件做出反应

### 通过 JavaScript 操作作 HTML 元素
> JS可以定位到DOM树中任意一个节点， 然后对这个节点进行操作， 例如隐藏节点、显示节点、改变颜色、获得文本的值， 改变文本的值，添加一个响应点击事件的函数等。

1. 查找 HTML 元素
* 通过 id 找到 HTML 元素：`var x = document.getElementById("ID");
* 通过标签名找到 HTML 元素：`var x = document.getElementById("ID");
var y = x.getElementsByTagName("p");`
* 通过类名找到 HTML 元素
* stringObject.match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

2. 改变元素内容
* document.getElementById("ID").innerHTML="Hello"; // 改变内容
* isNaN(x); // x 是否为数字
* document.write("写入内容"), // 向文档输出写内容

3. 改变元素样式
* document.getElementById("ID").style.color="#ff0000";   // 改变样式
* document.getElementById("ID").style.visibility="hidden"; // 隐藏元素
* document.getElementById("ID").style.visibility="visible" // 显示元素

## DOM 事件
### HTML 常见事件
* 当用户点击鼠标时
* 当网页已加载时
* 当图像已加载时
* 当鼠标移动到元素上时
* 当输入字段被改变时
* 当提交 HTML 表单时
* 当用户触发按键时

| 事件                      | 含义                                                                               |
| ------------------------- | ---------------------------------------------------------------------------------- |
| onclick                   | 元素被点击时，调用绑定函数                                                         |
| onload 和 onunload        | 在用户进入或离开页面时被触发，用于检测访问者的浏览器类型和浏览器版本，处理 cookie  |
| onmouseover 和 onmouseout | 将鼠标移至 HTML 元素上方或移出元素时触发                                            |
| onchange                  | 当域内的内容被改变时，执行绑定函数。例如：向输入框内输入小写，完成后自动转换为大写 |
| onmousedown 和 onmouseup  | 按下和释放鼠标，触发事件                                                            |
| onfocus 和 onblur         | 获得焦点或者失去焦点时，触发事件。例如：向文本框输入时，改变其背景颜色             |

### 绑定方式
1. js 中绑定
```javascript
//  必须是一个函数的引用或函数名，而不是函数调用
// 例如：foo(); 在这里将无效
document.getElementById("ID").onclick = foo;
```
2. html 中绑定
 ```html
onclick="foo()"
```