---
title: Java中的异常
date: 2017/6/16 
tags: Java
---

1. 什么是异常
2. 异常的分类
3. try...catch...finally结构的使用方法

## 1. 什么是异常？  ##

> 
* 异常(Exception)：中断了正常指令流的事件。
* 异常是一个对象；
* 异常产生于程序运行时；
* 指令流：程序执行时一系列的连续指令称为指令流。
> 
示例：
```java
class Test{
	public static void main(String args[]){
		int i = 1 / 0;
	}
}
```
 抛出异常：
>Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Test3.main(Test3.java:6)

* Exception in thread "main" ：在主线程中出现异常；
* ArithmeticException：异常的名称，算术异常；
* / by zero：被0除；
* at Test.main(Test.java:3)：异常位置；

## 2. 异常的分类 ##
### JDK提供的类： ###
 
> ![](http://i.imgur.com/gTBhe2x.png)
1.  Throwable：所有异常的父类；
2.  Error：虚拟机运行时产生的错误，产生错误，虚拟机直接关闭；
3.   Exception： 分为UncheckExeption（RuntimeExeption）和CheckExeption
> 
RuntimeException + Error 和其子类都是属于uncheckexception 
Exception类中除了 RuntimeException之外的类，都是属于checkexception

#### Exception ####
##### checkException #####
> 
checkException是必须要处理的，也就是不能抛出，必须通过try-catch来完成，不处理的话是不能进行编译的。
示例：
```java
class TestCheck{
	public static void main(String args[]){
        //CheckException
		Thread.sleep(1000); //让当前线程休眠1000ms
	}
}
```
运行结果：
![](http://i.imgur.com/xMd1LOi.png)

##### uncheckException（ RuntimeException） #####
> 
运行时异常包括平常遇到的各种异常，如空指针异常，数据格式异常等一系列异常，这种异常是可以不捕获的，可通过throws抛出异常，交给别的代码或者JAVA虚拟机来完成
示例：
```java
class Test{
	public static void main(String args[]){
		//UncheckException
		int i = 1 / 0;
	}
}
```
运行结果：
![](http://i.imgur.com/ll7JnfN.png)

## 3. try...catch...finally结构 ##
> 
```java
try{
       //代码A
	//有可能出现异常的代码B
	//代码C
}
catch(Exception e){ //虚拟机产生的异常对象e
	e.printStackTrace(); //处理异常的代码D
	//代码E
}
finally{
	//异常的出口
	//执行扫尾工作的代码F
}
```
#### 如果try中代码B没有异常：执行代码A-B-C-F
#### 如果try中代码B出现异常：执行代码A-B-D-E-F

### uncheckException ###
> 
```java
//uncheckException
class TestCheck{
	public static void main(String args[]){
		System.out.println(1);
		try{
			System.out.println(2);
			//有可能出现异常的代码
			int i = 1/0; 
			System.out.println(3);
		}
		catch(Exception e){ //虚拟机产生的异常对象e
			e.printStackTrace(); //打印异常栈的追踪信息
			System.out.println(4);
		}
		finally{
			//异常的出口
			System.out.println("finally");
		}
	}
}
```
运行结果：
![](http://i.imgur.com/DG4HLEn.png)

### checkException ###
> 
```java
//checkException
class TestCheck{
	public static void main(String args[]){
		System.out.println(1);
		try{
			System.out.println(2);
			//有可能出现异常的代码
			Thread.sleep(1000); //让当前线程休眠1000ms
			System.out.println(3);
		}
		catch(Exception e){ //虚拟机产生的异常对象e
			e.printStackTrace(); //打印异常栈的追踪信息
			System.out.println(4);
		}
		finally{
			//异常的出口
			System.out.println("finally");
		}
	}
}
```
运行结果：
![](http://i.imgur.com/yWIuLO9.png)
屏幕首先显示1，2，然后停顿1000ms，再显示3和finally

