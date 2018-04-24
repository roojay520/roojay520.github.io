---
title: JS基础基础
tags: JavaScript
categories: JavaScript
abbrlink: d4c7d8e9
date: 2017-09-16
---

## JS简介

* Netscape公司的Brendan Eich设计JS，只能运行在浏览器中。
* Ryan Dahl于2009年设计node.js，JS可以在服务端运行。
* JavaScript 是脚本语言。浏览器会在读取代码时，逐行地执行脚本代码。而传统编程语言，会在执行前对所有代码进行编译。
* _proto_ 实现继承关系。
* 对象名.prototype在原型对象层次优化子对象对公共方法的调用。
* 语法糖使javascript贴近java语法。

## 基础
### 数据类型
#### 字符串（String）
* str.length; 查看一个字符串的长度。
* str.charAt(index); 获取单个字符。
* str.split("a"); 指定从 a 处分割字符串为字符串数组。
* str.slice(开始索引， 结束索引); 获取一个字符串中的一部分内容，字符串切片。
* str[]; 通过索引获取单个字符。
* str.indexOf('所选字符'); 获取字符串中单个或者多个字符索引，如果找不到成员，返回 -1
* str.toLowerCase(); 将字符串转化为小写返回。
* str.toUpperCase(); 将字符串转化为大写返回。
```javascript
// 字符串操作
var str = '东风无力百花残';
// 获取字符串长度 a
var a = str.length;
// 获取字符 '花' 的索引
var b = str.indexOf('花');
// 通过索引获取字符 '百花'
var c = str.slice(b - 1, b + 1);
console.log("字符串长度：" + a + "\n花的索引：" + b + "\n获取花字符：" + c);
```

```javascript
/* 将一个大小混写的人名，姓全部转换为大写，名除首字母外全部转换为小写。
*/
// 定义一个 name 字符串
var name = "ALbERt EINstEin";
function nameChanger(name) {
  // 定义 finaNmae 复制 name 内容
 let finaName = name;
  // 以空格为参考，分割字符串为字符串数组
  // names = ["ALbERt", "EINstEin"]
  let names = name.split(" ");
  // slice(0， 1) 选择首字母转换为大写，slice(1) 选择后面的字符转换为小写
  names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  // 设置第二个数组元素全部为大写
  names[1] = names[1].toUpperCase();
  // 将数组中的所有元素转换为一个字符串
  // 设定空格为分隔符
  finaName = names.join(" ");
  console.log(finaName);
}
nameChanger(name);
```
#### 数组(Array)
* splice(index, num, item1,.....,itemN); 用于插入、删除或替换数组的元素。
  * index （必须） 删除/添加元素的开始下标。
  * num （必须） 删除元素的数量。
  * item （可选） 要添加的新元素。
* pop(); 删除数组末尾的元素。
* push("item"); 添加元素到数组末尾。
* shift(); 删除数组头部元素。
* unshift("item"); 添加元素到数组头部。

#### 数字(Number) 所有数字以 64 位浮点数储存.
* JavaScript 使用数字表示形式的 8 字节 IEEE 754 浮点标准来表示数字。  这意味着您可以编写最大为 1.79769x10308 和最小为 5x10-324 的数字。
* 以零开头且后面的数字都小于 8， 会被识别为八进制数。
* 0x 或 0X开头为十六进制数。
* 八进制或者十六进制数字不能有小数部分。
* JavaScript 区分正零和负零。

#### 布尔(Boolean)
* 可将任何表达式用作比较表达式。计算结果为 0、null、undefined 或空字符串的任何表达式被解释为 false。

#### 对象(Object)
* 确定对象属性是否存在，可使用 in 运算符：
```javascript
// 定义一个 people 对象
var people = {
  name: 'xiaoming',
  age: 12,
};
// 判断 people 对象中是否存在 name 属性
if('name' in people) {
  console.log('true');
}
else {
  console.log('flase');
}
// 输出 true
```

#### 日期(Date)
#### 方法(function)
* indexOf('目标', 开始位置 ); 获取数组成员索引，开始位置可省略不写。若成员不存在返回值为 -1。
* splice(index, num); 删除指定索引 index 位置的数组成员，num 指删除数量。返回值为删除的数组。

#### 空（Null）
* 表示什么都没有，将变量赋值 null 可以清除变量的内容（不删除变量）。
```javascript
  var num = null; // 值为空 null
  typeof num; //返回值为 object
```

#### 未定义（Undefined）
* 变量的值未定义。可以将变量与 undefined 进行比较确定变量是否存在。
* 也可以通过将变量的类型与字符串“undefined”进行比较确定其类型是否为 undefined。
```javascript
  var num;
  typeof num; // 返回值为 undefined
```
**null 和 undefined 的值相等，类型不同。null 值的行为与数字 0 类似，而 undefined 的行为与特定值 NaN（非数字）类似。**

JavaScript 拥有动态类型，相同的变量可用作不同的类型：
```javascript
var x;               // 此时 x 为 undefined
var x = 5;           // 此时 x 为数字
var x = 'hello';      // 此时 x 为字符串
```

#### 强制转换
* JavaScript 是一个弱类型的语言，其变量类型由其值的类型决定。
* 字符串、数字和布尔值的强制转换规则：
    * 如果添加一个数字和字符串，则该数字会强制转换为字符串。
    * 如果添加一个布尔值和字符串，则该布尔值会强制转换为字符串。
    * 如果添加一个数字和布尔值，则该布尔值会强制转换为数字。

##### parseFloat
将字符串转换为浮点数。
`parseFloat(numString);` numString 参数是一个包含浮点数的字符串。函数返回一个等于 numString 中包含的数字的数值。如果 numString 的前缀无法解析为浮点数，则返回 NaN（非数字）。

##### parseInt
将字符串转为整数。
`parseInt(numString, radix);`numString 参数是要转换为数字的字符串。radix(2~36) 为需要转成整数的进制。若没有指定基数：以"0x"或者"0X"开头, 则是 16 进制；0 开头为 8 进制或者 10 进制，具体由环境决定；其它默认是 10 进制。 函数将其第一个参数转换为字符串然后再解析它，解析成功返回一个进制指定的整数，反之返回 NaN。

## 操作符
操作符优先级;
| 运算符                             | 说明                                                   |
| ---------------------------------- | ------------------------------------------------------ |
| .[ ] ( )                           | 字段访问、数组索引、函数调用和表达式分组               |
| ++ -- - ~ ! delete new typeof void | 一元运算符、返回数据类型、对象创建、未定义的值         |
| * / %                              | 相乘，相除，取模                                       |
| + - +                              | 相加、相减、字符串串联                                 |
| << >> >>>                          | 移位                                                   |
| < <= > >= instanceof               | 小于、小于或等于、大于、大于或等于、是否为特定类的实例 |
| == != === !==                      | 相等、不相等、全等，不全等                             |
| &&                                 | 逻辑“与”                                             |
| `||`                               | 逻辑“或”                                             |
| ?:                                 | 三元条件运算                                           |
| = OP=                              | 赋值、赋值运算（如 += 和 &=）                          |
| ,                                  | 多个计算                                               |
### 逻辑运算符
==  **只比较两边的值，与类型无关。**当值相等时返回 true，
===  **同时比较两边的类型和值**，只有当类型和值都相等时返回 true。

!=  **只比较两边的类型，与值无关**，类型相同返回 true，类型不同返回 false
!== **只要值或者类型有一个不相等**，返回 ture

### 位运算符
* 两个整数交换数值
`a ^= b;
b ^= a;
a ^= b;`
```javascript
// 位操作快速交换两个整数的值
var a = 10;
var b = 12;
a ^= b;
b ^= a;
a ^= b;
console.log('a is:' + a + '\nb is:' + b); // a is:12 b is:10
```
## 函数
> 函数也称为'全局方法'。
### 箭头函数
#### 常见错误
* 错误1：使用箭头函数定义对象的方法
* 错误2：在原型上使用箭头函数
#### 适用场景
* 箭头函数适合于无复杂逻辑或者无副作用的纯函数场景下，例如用在map、reduce、filter的回调函数定义中；
* 不要在最外层定义箭头函数，因为在函数内部操作this会很容易污染全局作用域。最起码在箭头函数外部包一层普通函数，将this控制在可见的范围内；
* 如开头所述，箭头函数最吸引人的地方是简洁。在有多层函数嵌套的情况下，箭头函数的简洁性并没有很大的提升，反而影响了函数的作用范围的识别度，这种情况不建议使用箭头函数。
#### 副作用
1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作Generator函数。
### in 运算符
判断某个属性是否属于这个对象。
`'name' in obj`
* 'name' 属性值
*  obj 对象

### instanceof 运算符
返回值为布尔类型，判断一个对象是否为特定类的一个实例。
`result = obj instanceof class`
* result 返回值
* obj 对象
* class 特定类

### 其它运算符
#### typeof
* 可以使用 typeof 操作符来检测变量的数据类型。`typeof 66  // 返回值为 number `。
* 在JavaScript中，数组是一种特殊的对象类型。 typeof [1,2,3,4] 返回 object。


### 单双引号
* 同一种引号不能嵌套,最外层一般使用单引号，避免和 HTML 里面的冲突：

```javascript
//会报错误
""name" + 18"
//正确的方式
'"name" + 18'
```
### 模板字符串
> 允许嵌入表达式的字符串。使用反引号（``）代替单引号或者双引号，中间包含特定语法（${表达式}）,表达式是任意 JavaScript 表达式（如变量或函数）。
```javascript
  `hello ${表达式}`;
   `sun ${a + b}`
```

## 变量
* JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。
* 声明新变量时，可以使用关键词 "new" 来声明其类型。`var x = new String;`
* 使用 let 和 var 关键字声明变量，let的作用域是块，而var的作用域是函数。
* 如果把值直接赋给尚未声明的变量，该变量将被自动作为全局变量声明。
* let 可以声明作用域被限制在块级中的变量、语句或者表达式。var声明的变量是全局或者整个函数块的。
* let声明的变量只在其声明的块或子块中可用，这一点，与var相似。二者之间最主要的区别在于 var 声明的变量的作用域是整个封闭函数。
* 在 HTML 中, 全局变量都是 window 对象: 所有数据变量都属于 window 对象。

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // 同样的变量
    console.log(x);  // 显示2
  }
  console.log(x);  // 显示2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // 不同的变量
    console.log(x);  // 显示2
  }
  console.log(x);  // 显示1
```

* 在程序或者函数的顶层，let并不会像var一样在全局对象上创造一个属性.

```javascript
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

## JS 面向对象
* javascript是基于原型的面向对象的语言，没有类的概念。

### 创建对象

  - JS中不用 class 创建对象
  - 对象：属性加方法构成

```javascript
  //创建一个 people 对象，拥有 name 属性和 speak 方法
  var people = {
      country: "CN";
      from: funcation(){
          console.log("From" + this.conuntry)
      }
  }；
  people.from();
  //由于对象并不和类关联， 我们可以随意地给这个对象增加属性
  people.speak = "Chinese";
  console.log(people.speak);
  ```

### 继承

  - 继承就是让两个对象建立关联，
  - 在 Javascript 中每个对象都有一个特殊的属性叫做__proto__， 你可以用这个属性去关联另外一个对象(原型)。

```javascript
    //定义一个american对象
    var american = {
      country: "US";
      _proto_: people;//指向people对象
    }；
    //定义一个chinese对象
    var chinese = {
      country: "CN";
      _proto_:people;//指向people对象
    };
    american.from();
    chinese.from();
  ```

- american, chinese 的原型都是 people，当 from() 方法被调用时，先在自身的方法列表中寻找，找不到时再去原型中去寻找，如果原型中找不到，就去原型的原型中寻找，直到 Object 那里，如果还找不到，那就是方法未定义。这些对象通过_proto_建立了一个原型链。

### 构造函数 原型
* 将原型对象放入 Object.prototype 中，每次 new 新对象时，js会自动建立原型链。

```javascript
  function Student(name){
    this.name = name;
  }
  Student.prototype = {
    say: function(){
      console.log("My name is" + this.name);
    }
  }
  //创建新对象，js自动构建原型链继承 say 方法
  var xiaoming = new Student("xiaoming");
  var laowang = new Student("laowang");

  xiaoming.say();
  laowang.say();
  ```

### 语法糖

```javascript
  class Student{
    constructor(name){
      this.name = name;
    }
    say(){
      console.log("My name is" + this.name);
    }
  }

  var xiaoming = new Student("xiaoming");
  xiaoming.say();
  ```
### 闭包

  ​

## AJAX 异步调用

* 异步的 JavaScript 和 XML
* AJAX 是一种用于创建快速动态网页的技术。
* 通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
* 传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。
* 例如服务器返回下面的 XML 数据：

```xml
<book>
    <isbn>978-7-229-03093-3</isbn>
    <name>三体</name>
    <author>刘慈欣</author>
   <introduction>中国最牛的科幻书</introduction>
   <price>38.00</price>
</book>
```

* 上面的数据中，标签占去了大部分，数据比较臃肿。

## JSON

* JavaScript 对象表示法（JavaScript Object Notation）。
* JSON 是存储和交换文本信息的语法。类似 XML。
* JSON 比 XML 更小、更快，更易解析。
* JSON.parse(); 解析一个JSON字符串，可选地转换生成的值及其属性，并返回值。
* JSON.stringify(); 返回与指定值相对应的一个JSON字符串，可选地仅包含某些属性或以用户定义的方式替换属性值。

```javascript
//这种结构完全可以表达上面的xml 内容
var book = {
"isbn": "978-7-229-03093-3",
"name": "三体",
 "author": "刘慈欣",
"introduction": "中国最牛的科幻书",
"price": "38.00"
 }
//JS语法还支持数组，可以表达多个对象
var books = [
 {
"isbn": "978-7-229-03093-3",
"name": "三体",
"author": "刘慈欣",
"introduction": "中国最牛的科幻书",
"price": "38.00"
 },
 {
"isbn": "978-7-229-03094-1",
"name": "我是一个线程",
"author": "刘欣",
"introduction": "一个线程的自述",
"price": "0.0"
 }
```

* books[0].name -->返回“三体"
* books[1].author -->返回“刘欣”
