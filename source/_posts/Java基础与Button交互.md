---
title: Java基础与Button交互
tags: Android
categories: Java
abbrlink: b8bb4b60
date: 2017-06-16 14:28:18
---
## 变量的定义
> 在程序的运行过程中，会产生一些临时数据储存在内存单元中，这每一个内存单元都用一个标识符来标识，这些内存单元被称为变量。
### 变量的数据类型
> 变量的数据类型分为两种，即基本数据类型和引用数据类型。
#### 1. 基本数据类型 ####
1. 数值型分为两种：
    1.1  整数类型（byte 1字节，short 2字节，int 4字节，long 8字节）
    1.2 浮点类型（float 4字节，double 8字节）
2. 字符型（char）2字节
3. 布尔型（boolean）1字节
#### 2. 引用数据类型 ####
1. 类（class)
2. 接口（interface）
3. 数组
4. 枚举（enum）
5. 注解（annotation）
### 变量类型转换 ###
> 在程序中，当把一种数据类型的值赋值给另一种数据类型时，需要进行数据类型的转换。数据类型转换分为两种：自动类型转换和强制类型转换。
#### 1. 自动类型转换 ####
> 两种数据类型转换不需要显式声明，自动转换类型必须满足两个条件：两种数据类型彼此兼容和转换目标类型的取值范围必须大于原来类型的取值范围。
1. byte→short，int，long
2. short，char→int，long
3. int→long
4. byte，char，short，int→float
5. byte，char，short，int，long，float→double
6. boolean类型无法转换为其他类型。
#### 2. 强制类型转换 ####
> 自动转换类型无法进行转换时，进行强制类型转换。取值范围较大的数据类型转换为取值范围较小的类型，可能会造成精度丢失。

例如：
```java
int num;
byte b =(byte)num;
```
## 常量

> 在编程语言中，**常量**是指在整个程序中永远不会改变的值。在 Java 中，你可以使用关键字 `final` 来强制规定某个值不得被更改。例如：
```java
final int POINTS_FOR_FREE_THROW = 1;
```
Then if you wrote the following, you'd get an error:
```java
POINTS_FOR_FREE_THROW = 100;
```
- 注意，按照惯例，常量的名称全为大写形式。此外，单词之间用下划线连接，而不用空格或用骆驼拼写法。你可以将变量声明为常量，防止自己意外地更改了变量的值。
## 方法 ##
> 为解决代码重复编写的问题所设计的特定功能代码块。
> 方法不能嵌套。
> main（）方法的作用：调用方法的实例化对象。

方法结构一般为：
```java
修饰符 返回值类型 方法名（参数类型 参数1，参数类型 参数2，...）{
    执行语句
    ...
    ...
    return 返回值；
}
```
## 选择结构语句
### if条件语句
> 当判断条件1结果为 true 时，执行语句 1，为 false 时，执行语句 2。当判断条件 1, 2 都不满足 true 时，执行语句 3。

例如：
```java
if (判断条件1){
  执行语句1
}
else if(判断条件2){
  执行语句2
}
else{
  执行语句3
}
```
### 三元运算 ###
> 一种类似于 if-else 语句的运算，三元运算一般会得到一个结果，一般用来对某个变量进行赋值。
> 当判断条件成立时结果为表达式1的值，否则表达式2的值。
```java
判断条件 ? 表达式 1 : 表达式 2
```
例如：求取两个数 x，y 中较大的值。
```java
//if-else 实现方法
int x, y, max;
if(x>y){
    max = x;
}
else{
    max = y;
}

//三元运算实现
int x, y, max;
max = x > y ? x : y;

```
### switch语句
> 在 switch 语句中使用 switch 关键字来描述一个表达式，使用case关键字来描述和表达式结果比较的目标值，
> 当表达式的值和某个目标值匹配时，会执行对应 case 下的语句。

例如：
```java
switch(表达式){
  case 1:
    执行语句1;
       break; //break终止case并跳出switch循环
  case 2:
    执行语句2;
     break;
  case 3:
    执行语句3；
      break;
  default: //default处理和前面的case都不匹配的值
    执行语句4;
      break;
}
```
## 循环结构语句
### while 循环语句
> 循环条件判断为 true 时，执行语句循环执行，直到循环条件为 false。

例如：
```java
while(循环条件){
    执行语句
}
```
### do...while循环语句
> 循环体会无条件执行一次，然后根据循环条件决定是否继续执行。

例如：
```java
do{
  执行语句
}
while(循环条件);
```
### for循环语句

> 一般用在循环次数已知的情况下，循环条件 ② 判断为 true 时，执行顺序为： ①→②→④→③，初始化表达式 ① 只在第一次循环时执行。

例如：
```java
for(初始化表达式①;循环条件②;操作表达式③){
  执行语句④
}
```
```java
/**
* Created by Roojay on 2017/4/7.
* 利用嵌套循环打印一个正三角形。
*/
public class Test1 {
    public static void main(String args[]){
        int i, j, k;
        for(i = 1; i <= 5; i++){
            for(k = 0; k < 5 - i; k++){
                System.out.print(" ");
            }
            for(j = 1; j <= i; j++){
                System.out.print("* ");
            }

            System.out.println();
        }

    }
}
```
### 跳转语句
#### break语句
> 当它出现在 switch 条件语句中时，作用是终止某个 case 并跳出 switch 结构。
> 当它出现在循环语句中，作用是跳出循环语句，执行后面的代码。
> 当它出现在嵌套循环内层循环中时，只能跳出内层循环，如果想跳出外层循环，
> 需要对外层前面添加标记 itcast： ，在后面使用 break itcast 跳出外层循环。
#### continue语句
> continue 语句用在循环语句中，它的作用是终止本次循环，执行下一次循环。
> 也可以使用标记结束外循环。
## Button交互
- XML 布局文件中的 <Button> 元素创建 Button，则可以使用该元素的 android:onClick 属性指定方法。这一方便的备选方案专为不改变行为的 Button 提供。
- android:onClick="buttonName"
### 屏幕输出显示
#### MainActivity.java部分
```java
    public void display(String text) {
        TextView t = (TextView) findViewById(R.id.display_text_view);
        t.setText(text);
    }

    public void display(int text) {
        TextView t = (TextView) findViewById(R.id.display_text_view);
        t.setText(text + "");
    }
```
- 其中 R.id.display_text_view中的display_text_view是指具体输出显示的TextView的ID。

#### activity_main.xml部分

```xml
    <TextView
        android:id="@+id/display_text_view"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text=""
        android:textSize="45sp"
        android:textColor="#000000"/>
```
### Style
- 下面两个 TextView 都设置着大量相同的元素：
```xml
<TextView
        android:id="@+id/tell"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_above="@id/adress"
        android:text="电话:028-666666"
        android:textSize="24sp"
        android:textColor="#FFFFFF"
        android:background="#795548"
        android:layout_marginLeft="8dp"
        android:layout_marginTop="8dp" />
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_above="@id/tell"
        android:text="半岛咖啡"
        android:textSize="30sp"
        android:textColor="#FFFFFF"
        android:background="#795548"
        android:layout_marginLeft="8dp" />
<!-- 相同的元素 -->
<TextView
    android:textColor="#FFFFFF"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:background="#795548"
    android:layout_marginLeft="8dp" />
```
- 可以在`res/value/styles.xml`里定义个 style 来包括这些通用的元素设置：

```xml
<style name="cofe_textView">
        <item name="android:textColor">#FFFFFF</item>
        <item name="android:layout_width">wrap_content</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:background">#795548</item>
        <item name="android:layout_marginLeft">8dp</item>
    </style>
```

然后可以用以下一句语句轻易地重复引用这些设置：
```xml
style="@style/cofe_textView"
```

这一段 TextView 可以重构为以下：

```xml

<TextView
        style="@style/cofe_textView"
        android:id="@+id/tell"
        android:layout_above="@id/adress"
        android:text="电话:028-666666"
        android:textSize="24sp"
        android:layout_marginTop="8dp" />
<TextView
        style="@style/cofe_textView"
        android:layout_above="@id/tell"
        android:text="半岛咖啡"
        android:textSize="30sp" />
```