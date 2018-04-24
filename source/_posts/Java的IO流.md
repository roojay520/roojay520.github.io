---
title: Java中的I/O流
date: 2017-06-16
tags: Java
categories: Java
abbrlink: 649b2029
---

## 流的概念和作用
>
> 流是数据源到Java程序，Java程序到输出位置之间的管道。


## IO流的分类 ##
>
1. 根据数据处理类的不同分为：字符流和字节流。
2. 根据数据流向不同分为：输入流和输出流。
* 输入输出是以Java程序为参照物的，相对于Java程序本身
* 输入流：从数据源中读取数据到Java程序中，这个过程称之为输入。
* 输出流：Java程序将数据写入到其他地方，这个过程称之为输出。
3. 节点流和处理流。
4. 节点流：普通的管道；
5. 处理流：功能性管道，对数据进一步加工。

## 字节流 ##
### 字节流中的核心类 ###

![](http://i.imgur.com/zhxfDm7.png)

### InputStream ###
>
#### int read(byte [] b,int off,int len) ####
byte[] b：byte类型数组；
int off：偏移量；
int len： 读取数据的量；
返回值为这次调用read方法读取数据的长度。

### OutputStream ###
>
#### void write(byte [] b,int off,int len) ####
byte[] b：byte类型数组；
int off：偏移量；
int len： 写入数据的量；


### 程序步骤 ###

1. 导入类 java.io.*；
2. 定义主函数；
3. 声明输入流的引用；
4. 声明输出流的引用；
```java
try{
  1.生成代表输入流的对象；
  2.生成代表输出流的对象；
  3. 生成一个byte字节数组；
  4.调用输入流的read方法读取数据；
  5.定义临时变量接受数据的量；
  6.调用输出流的write方法写入数据；
}
catch(Exception e){
	Systen.out.println(e);
}
//finally进行结尾处理
finally{
	try{
		fis.close();
		fos.close();
	}
	catch(Exception e){
		System.out.println(e);
	}
}
```
#### 示例 1：
```java
import java.io.*;
public class Test{
	public static void main(String args[]){
		//声明输入流引用
		FileInputStream fis = null;
		//声明输出流引用
		FileOutputStream fos = null;
		try{
			//生成代表输入流的对象
			fis = new FileInputStream("D:/java/8.8/from.txt");
			//生成代表输入流的对象
			fos = new FileOutputStream("D:/java/8.8/to.txt");
			//生成一个字节型buffer数组
			byte[] buffer = new byte[100];
			//定义一个临时变量，用于接受调用输入流read方法读取数据的量
			int temp = fis.read(buffer,0,b.length);
			//调用输出流的write方法写入数据
			fos.write(buffer,0,temp);
		}
		catch(Exception e){
			System.out.println(e);
		}
	}
		//finally进行结尾处理
		finally{
			try{
				fis.close();
				fos.close();
			}
			catch(Exception e){
				System.out.println(e);
			}
		}
}
```



## 大文件的读写 ##
1. 调节buffer数组的大小；
2. 对read，write方法采取while循环；

#### 示例 2：

```java
while(true){
	int temp = fis.read(buffer,0,buffer.length);
	if(temp == -1){
		break;
	}
	fos.write(buffer,0,temp);
}
```

## 字符流 ##

* 字符流：是以对写文件时，以字符为基础
* 字节输入流：Reader <--FileReader
    * int read(char [] c, int off, int length )
* 字节输出流：Writer  <--FileWriter
    * void writer(char [] c, int off, int length)

#### 示例 3：
```java
import java.io.*;
public class TestChar{
	public static void main(String args[]){
		FileReader fr = null;
		FileWriter fw = null;
		try{
			fr = new FileReader("d:/java/9.5/read.txt");
			fw = new FileWriter("d:/java/9.5/write.txt");
			char [] buffer = new char[1024];
			while(true){
				int temp = fr.read(buffer, 0, buffer.length);
				if(temp == -1){
					break;
				}
				fw.write(buffer, 0, temp);
			}
		}
		catch(Exception e){
			System.out.println(e);
		}
		finally{
			try{
				fr.close();
				fw.close();
			}
			catch(Exception e){
				System.out.println(e);
			}
		}
	}
}
```