---
title: Android View&Layout
tags: Android
abbrlink: 29c8a334
date: 2017-06-16 14:24:12
---
## View 视图

### TextView

-   字体大小属性：**android:textSize="36sp"**

- 或者采用另一种字体大小定义方式：

    **android:textAppearance="?android:textAppearanceLarge"**

    As of API 19 (KitKat):

    - *?android:textAppearanceSmall* is currently 14sp
    - *?android:textAppearanceMedium* is currently 18sp
    - *?android:textAppearanceLarge* is currently 22sp

- 文字颜色属性：**android:textColor**

- 文本变成大写：**android:textAllCaps="true"**

- 字体属性：**android:textStyle="bold"**  bold:粗体；italic:斜体；bolditalic:粗斜体。

- 属性：**android:fontFamily="sans-serif-light"** 字体设置。

- 属性值 wrap_conent:自适应大小。

- **gravity**中文意思是”重心“，就是表示view横向和纵向的停靠位置

    - **android:gravity：**是对view控件本身来说的，是用来设置view本身的内容应该显示在view的什么位置，默认值是左侧。也可以用来设置布局中的控件位置
    - **android:layout_gravity：**是相对于包含该元素的父元素来说的，设置该元素在父元素的什么位置；
    - 比如TextView: android:layout_gravity表示TextView在界面上的位置，android:gravity表示TextView文本在TextView的什么位置，默认值是左侧.

    ​
    ```xml
    <TextView
              android:text="Hello Android!"
              android:background="@android:color/darker_gray"
              android:layout_width="150dp"
              android:layout_height="75dp" />

    <!-- 注释内容 -->
    ```

### ImageView

- 属性: android:scaleType="center":不改变图片大小居中显示。
- 属性: android:scaleType="centerCrop":自适应屏幕居中显示。


  ```xml

  <ImageView
               android:src="@drawable/cake"
               android:layout_width="wrap_content"
               android:layout_height="wrap_content"
               android:scaleType="center"  />
  ```

### Button

- XML 布局文件中的 <Button> 元素创建 Button，则可以使用该元素的 android:onClick 属性指定方法。这一方便的备选方案专为不改变行为的 Button 提供。
- android:onClick="buttonname"


## Layout 布局
### LinearLayout线性布局

-   View水平or垂直方向排列。
  - 属性：android:orientation="vertical" 决定布局以垂直(列)显示。
  - 属性：android:orientation="horizontal"决定布局以水平(行)显示。

    ```xml
    <LinearLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical">
    <TextView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:text="1"/>
    <TextView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:text="2"/>
    <TextView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:text="3"/>
    </LinearLayout>
    ```

     ![](http://i.imgur.com/dkCwMv0.png)

### Layout Weight

- layout_weight:视图权重。
  - vertical(垂直)时设置layout_height为0，设置layout_weight为1.
  - horizontal(水平)时设置layout_width为0，设置layout_weight为1.

### RelativeLayout相对布局

#### 相对于父视图边缘位置对齐

-   上边缘对齐：android:layout_alignParentTop="true"
  - 下边缘对齐：android:layout_alignParentBottom="true"
  - 左边缘对齐：android:layout_alignParentLeft="true"
  - 右边缘对齐：android:layout_alignParentRight="true"
  - 垂直方向居中：android:layout_centerVertical="true"
  - 水平方向居中：android:layout_centerHorizontal="true"
  - 屏幕居中：android:layout_centerInParent="true"

    ```xml
    <RelativeLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_alignParentTop="true"
    android:layout_alignParentLeft="true"
    android:text="1"/>
    <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_alignParentTop="true"
    android:layout_centerHorizontal="true"
    android:text="2"/>
      <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_alignParentTop="true"
    android:layout_alignParentRight="true"
    android:text="3"/>
    <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_centerVertical="true"
    android:layout_alignParentLeft="true"
    android:text="4"/>
    <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_centerInParent="true"
    android:text="Center"/>
      <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_centerVertical="true"
    android:layout_alignParentRight="true"
    android:text="5"/>
    <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_alignParentBottom="true"
    android:layout_alignParentLeft="true"
    android:text="6"/>
    <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_alignParentBottom="true"
    android:layout_centerHorizontal="true"
    android:text="7"/>
    <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_alignParentBottom="true"
    android:layout_alignParentRight="true"
    android:text="8"/>
    </RelativeLayout>
    ```

    ​

    ![](http://i.imgur.com/2e9IPMB.png)






#### 相对于其它视图定位

- android:id="@+id/viewname_text_view"
- 符号“@”表示Android应用中的资源。
- 位于center上边：android:layout_above="@id/center"
- 位于center下边：android:layout_below="@id/center"
- 位于center左边：android:layout_toLeftOf="@id/center"
- 位于center右边：android:layout_toRightOf="@id/center"

 ```xml
 <RelativeLayout
 android:layout_width="match_parent"
 android:layout_height="match_parent">
 <TextView
 android:id="@+id/center"
 android:layout_width="wrap_content"
 android:layout_height="wrap_content"
 android:layout_centerInParent="true"
 android:text="Center"/>
 <TextView
 android:layout_width="wrap_content"
 android:layout_height="wrap_content"
 android:layout_toLeftOf="@id/center"
 android:layout_alignBottom="@id/center"
 android:text="2"/>
 <TextView
 android:layout_width="wrap_content"
 android:layout_height="wrap_content"
 android:layout_toRightOf="@id/center"
 android:layout_alignBottom="@id/center"
 android:text="3"/>
 <TextView
 android:layout_width="wrap_content"
 android:layout_height="wrap_content"
 android:layout_above="@id/center"
 android:layout_alignLeft="@id/center"
 android:text="1"/>
 <TextView
 android:layout_width="wrap_content"
 android:layout_height="wrap_content"
 android:layout_below="@id/center"
 android:layout_alignLeft="@id/center"
 android:text="4"/>
 </RelativeLayout>
 ```

 ![](http://i.imgur.com/wyQuZei.png)

### 内边剧和外边距

#### 内边距(padding)

- android:padding="8dp"

  OR

  - android:paddingLeft="8dp"
  - android:paddingRight="8dp"
  - android:paddingTop="8dp"
  - android:paddingBottom="8dp"
  - 默认值为0

#### 外边距(magin)

- android:layout_margin="8dp"

  OR

  - android:layout_marginLeft="8dp"

  - android:layout_marginRight="8dp"

  - android:layout_marginTop="8dp"

  - android:layout_marginBottom="8dp"
  - 默认值为0

![](http://i.imgur.com/sjGdzlh.png)

### 创建视图

1. 选择Views ；
2. 摆放Views；
3. 设计Views样式。