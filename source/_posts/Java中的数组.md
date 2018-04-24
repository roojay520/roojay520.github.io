---
title: Java中的数组
date: 2017-06-16
tags: Java
categories: Java
abbrlink: e7882660
---

* 数组是用来存储固定大小的同类型元素。

## 数组的定义方法

### 静态定义法

```java
int arr [] = {1,5,6,4,};
```

* arr：整型数组。
* arr[n]：n为下标，从第0位开始。arr[0]=1, arr[1]=5, arr[2]=6.
* 数组长度：arr.length.

### 动态定义法

```java
int arr [] = new int[10];
```

* 数组的长度为10.


### 二维数组的定义方法

```java
静态定义法：
int arr[] [] = {{5,3,6},{5,8,7},{6,3,2}};
动态定义法：
int arr[] [] = new int[][];
例：
int[1][2] = 7;
```



