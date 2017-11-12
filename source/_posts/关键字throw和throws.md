---
title: throw和throws
date: 2017/6/16
tags: Java
categories: Java
abbrlink: 29cc0096
---

## throw ##
### throw的作用 ###

- 如果Java虚拟机不能判断异常e，可以生成异常对象e，用throw加上这个异常对象抛出这个异常。
>
示例：
```java
package src;
class People{
	private int age;
	public void setAge(int age){
		if(age < 0){
			RuntimeException e = new RuntimeException("年龄不能为负数");
			throw e;
		}
		this.age = age;
		System.out.println(age);
	}
}
class Test{
	public static void main(String args[]){
		People people = new People();
		people.setAge(-20);
	}
}
```

运行结果：
![](http://i.imgur.com/hSqdO9z.png)


##  throws ##
### throws ###

- 声明一个函数可能产生异常，函数不对异常进行处理，在调用函数的地方对异常进行处理。
>
示例：
```java
package src1;
class People{
	private int age;
	public void setAge(int age)  throws Exception{
		if(age < 0){
			Exception e = new Exception("年龄不能为负数");
			throw e;
		}
		this.age = age;
		System.out.println(age);
	}
}
class Test{
	public static void main(String args[]){
		People people = new People();
		try{
			people.setAge(-20);
		}
		catch(Exception e){
			System.out.println(e);
		}
	}
}
```
运行结果：
![](http://i.imgur.com/wJqKdCu.png)