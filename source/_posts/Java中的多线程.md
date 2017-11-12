---
title: Java中的多线程
date: 2017/6/16
abbrlink: 265f6f6b
tags: Java
categories: Java
---

## 多进程
在操作系统中能（同时）运行多个任务（程序）。

## 多线程 ##
在同一应用程序中有多个顺序流（同时）执行。
![](http://i.imgur.com/svr5BHK.png)

![](http://i.imgur.com/Pw3R29D.png)

## 线程的创建方法 ##
### 继承Thread类创建多线程 ###
* 继承Thread类，覆写Thread类的run（）方法，在run（）方法中实现运行在线程上的代码。

1. 定义一个类FirstThread继承Thread类，覆写Thread类的run（）方法；
2. 生成线程类的对象firstThread；
3. 启动线程start（）方法。

#### 示例： ####
```java
public class Test{
	public static void main(String args[]){
		//生成线程类的对象
		FirstThread firstThread = new FirstThread();
		//启动线程start（）方法
		firstThread.start();

		for(int i = 1; i < 50; i++){
			System.out.println("Main---->:" + i);
		}
	}
}


//继承Thread类，覆写Thread类的run（）方法
class FirstThread extends Thread{
	public void run(){
		for(int i = 1; i < 50; i++){
			System.out.println("FirstThread--->:" + i);
		}
	}
}
```
### 实现Runnable接口创建多线程 ###
* 提供一个实现接口Runnable的类作为线程的目标对象，在初始化一个Thread类或者Thread子类的线程对象时，把目标对象传递给这个线程实例，由该目标对象提供线程体。

1. 定义一个类FirstThread实现Runnable接口；
2. 生成Runnable实现类FirstThread的一个对象firstThread；
3. 生成一个Thread对象，并将firstThread作为参数传递给该Thread对象；
4. 通知Thread对象执行start（）方法。

#### 示例： ####
```java
public class Test{
	public static void main(String args[]){
		//生成Runnable实现类FirstThread的一个对象firstThread
		FirstThread firstThread = new FirstThread();
		//生成一个Thread对象
		//并将firstThread作为参数传递给该Thread对象
		Thread thread = new Thread(firstThread);
		//通知Thread对象执行start（）方法
		thread.start();

		for(int i = 1; i <50; i++){
			System.out.println("Main--->:" + i);
		}
	}
}

//实现Runnable接口的类FirstThread
class FirstThread implements Runnable{
	public void run(){
		for(int i = 1; i <50; i++){
			System.out.println("FirstThread--->:" + i);
		}
	}
}
```


## 线程的简单控制方法 ##

* 中断线程
  * Thread.sleep（n毫秒）//当前线程休眠n毫秒
  * Thread.yield（）//当前线程自动让出CPU，AB重新线程抢占CPU

*  设置线程的优先级
  *  getPriority（）
  *  setPriority（）
    * thread.setPriority(Thread.MAX_PRIORITY) //设置最大优先级为10
    * thread.setPriority(Thread.MIN_PRIORITY) //设置最小优先级为1

## 同步语法 ##
### 同步代码块 ###

```java
synchronized(this) {   //this：同步锁

		代码块
}
```
* synchronized锁住一个对象。
* 如果线程A得到同步锁，那么他将可以执行代码块，
   即使线程B从线程A手中抢到了同步锁，B也不能立即执行代码块，它必须等到线程A执行完这个代码块之后才能执行。

#### 示例 ####
```java
public class Test{
	public static void main(String args[]){
		MyThread myThread = new MyThread();
		//生成两个Thread对象，但是这两个Thread对象共用同一个线程体
		Thread t1 = new Thread(myThread);
		Thread t2 = new Thread(myThread);
		//通过Thread对象的setName（）方法设置线程名字
		//使用getName方法获取线程的名字
		t1.setName("线程A");
		t2.setName("线程B");
		//分别启动两个线程
		t1.start();
		t2.start();
	}
}

class MyThread implements Runnable{
	int i = 100;
	public void run(){
		while(true){
			synchronized(this){ //this：同步锁
				//Thread.currentThread()获取当前这段代码运行的线程位置
				System.out.println(Thread.currentThread().getName() + i);
				i--;
				Thread.yield();
				if(i < 0){
					break;
				}
			}
		}
	}
}
```
### 同步方法 ###
```java
public synchronized void run(){

	代码块
}

```
* synchronized锁住this。
