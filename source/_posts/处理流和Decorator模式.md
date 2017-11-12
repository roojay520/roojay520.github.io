---
title: 处理流与Decorator模式
date: 2017/6/16
tags: Java
categories: Java
abbrlink: bbf344f6
---

## 处理流 ##
### BufferedReader
![](http://i.imgur.com/oGh5e2r.png)
 * readeLine：每次读取一行数据
  ![](http://i.imgur.com/DqMcSrm.png)

#### 示例： ####
```java
import java.io.*;
public class Test{
	public static void main(String args[]){
		FileReader filereader = null;
		BufferedReader bufferedreader = null;
		try{
			filereader = new FileReader("C:/Users/Jay/Desktop/9.6/src1/read.txt");
			bufferedreader = new BufferedReader(filereader);
			String line = null;
			while(true){
				line = bufferedreader.readLine();
				if(line == null){
					break;
				}
				System.out.println(line);
			}

		}
		catch(Exception e){
			System.out.println(e);
		}
		finally{
			try{
				filereader.close();
				bufferedreader.close();
			}
			catch(Exception e){
				System.out.println(e);
			}
		}
	}
}
```
## Decorator（装饰者）模式 ##
![](http://i.imgur.com/arkDK8p.png)
#### 示例： ####
```java
interface Teacher{
	public void teaching();
}

class MathTeacher implements Teacher{
	public void teaching(){
		System.out.println("我是一名数学老师");
	}
}

class ChineseTeacher implements Teacher{
	public void teaching(){
		System.out.println("我是一名语文老师");
	}
}

class ATeacher implements Teacher{
	private Teacher teacher;
	public ATeacher(Teacher teacher){
		this.teacher = teacher;
	}
	public void teaching(){
		System.out.println("你好，我来自ASchool");
		teacher.teaching();
	}
}

public class Test{
	public static void main(String args[]){
		MathTeacher mathTeacher = new MathTeacher();
		ATeacher aTeacher1 = new ATeacher(mathTeacher);
		aTeacher1.teaching();


		ChineseTeacher chineseTeacher = new ChineseTeacher();
		ATeacher aTeacher2 = new ATeacher(chineseTeacher);
		aTeacher2.teaching();
	}
}
```