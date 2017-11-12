---
title: Android简易计分板实现
tags: Android
categories: Android
abbrlink: 81bae912
date: 2017-06-16 14:30:29
---

### 一、View的选择 ###
- 分析整个 APP 的组成：
    - TextView：  4 个
    - Button： 7个
    - 空白 View：1个

### 二、Layout布局 ###

- 采用 RelativeLayout 作为整体布局父容器。
- 将其分为上下两个部分，下面部分只有一个 Button ，直接设置好其相对于父视图的位置参数以及自身属性即可。
- 上面部分又可以横向分为三个部分：
    - 1.TeamA 团队的加分 Button 及显示的 TextView；
        - 对于 TeamA， 其中各组件纵向排列，可采用Vertical LinearLayout作为其视图容器。
    - 2.空白 View 做中间隔离；
    - 3.TeamB 团队的加分 Button 及显示的 TextView 。
        - 对于 TeamB，其设置等同于 TeamA 的设置。
- 可以采用 Horizontal LinearLayout 作为其视图容器。

#### 整体布局 active_main.xml 代码如下所示：

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#D2403E"
    android:padding="@dimen/activity_vertical_margin"
    tools:context="com.roojay.android.courtcounter.MainActivity">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="18dp"
        android:orientation="horizontal">

        <LinearLayout
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:orientation="vertical">

            <TextView
                style="@style/textView"
                android:id="@+id/teama_text_view"
                android:text="@string/team_a" />

            <TextView
                android:id="@+id/pointsa_text_view"
                style="@style/pointsTextView"
                android:text="@string/points_a" />

            <Button
                style="@style/addButtonView"
                android:id="@+id/buttona3"
                android:onClick="addThreeA"
                android:text="@string/add3a" />

            <Button
                style="@style/addButtonView"
                android:id="@+id/buttona2"
                android:onClick="addTwoA"
                android:text="@string/add2a" />

            <Button
                style="@style/addButtonView"
                android:id="@+id/buttona1"
                android:onClick="addOneA"
                android:text="@string/add1a" />
        </LinearLayout>

        <View
            android:layout_width="1dp"
            android:layout_height="match_parent"
            android:layout_marginTop="8dp"
            android:layout_marginBottom="8dp"
            android:background="#FFFEFE" />


        <LinearLayout
            android:layout_width="0dp"
            android:layout_height="match_parent"
            android:layout_weight="1"
            android:orientation="vertical">

            <TextView
                style="@style/textView"
                android:id="@+id/teamb_text_view"
                android:text="@string/team_b" />

            <TextView
                style="@style/pointsTextView"
                android:id="@+id/pointsb_text_view"
                android:text="@string/points_b" />

            <Button
                style="@style/addButtonView"
                android:id="@+id/buttonb3"
                android:onClick="addThreeB"
                android:text="@string/add3b" />

            <Button
                style="@style/addButtonView"
                android:id="@+id/buttonb2"
                android:onClick="addTwoB"
                android:text="@string/add2b" />

            <Button
                style="@style/addButtonView"
                android:id="@+id/buttonb1"
                android:onClick="addOneB"
                android:text="@string/add1b" />

        </LinearLayout>
    </LinearLayout>

    <Button
        style="@style/resetButtonView"
        android:id="@+id/button_reset"
        android:onClick="reset"
        android:text="@string/reset_text_views" />


</RelativeLayout>

```

### 三、交互 ###

- 通过 Button 的 android:onClick 属性指定方法。
- 将各个 Button 与 Java 中的方法关联起来。
- 具体操作是在 active_main.xml 中设置 android:onClick="buttonName" 为每个 Button 设置一个独特的名字，这个名字用于 Java 代码寻找和识别每个不同的 Button 。

例如：

```xml
在 active_main.xml 中设置 Button3A 的 onClick 属性为 android:onClick="addThreeA"
```
在 MainActivity.java 中编写代码：

```java
    public void addThreeA(View view) {

    //所需要执行的操作，假如是 A 团队加三分

    }
```

那么当你按下 Button3A 就将 A 团队的分数加上三分。

#### 整个 MainActivity.java 代码  ####

```java
package com.roojay.android.courtcounter;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    int scorea = 0;
    int scoreb = 0;


    /**
     * Add 3 points for the Team A.
     */
    public void addThreeA(View view) {
        scorea = scorea + 3;
        displayTeamscorea(scorea);
    }

    /**
     * Add 2 points for the Team A.
     */
    public void addTwoA(View view) {
        scorea = scorea + 2;
        displayTeamscorea(scorea);
    }

    /**
     * Add 1 point for the Team A.
     */
    public void addOneA(View view) {
        scorea = scorea + 1;
        displayTeamscorea(scorea);
    }

    /**
     * Displays the given scorea for Team A.
     */
    public void displayTeamscorea(int scorea) {
        TextView scoreaView = (TextView) findViewById(R.id.pointsa_text_view);
        scoreaView.setText(String.valueOf(scorea));
    }


    /**
     * Add 3 points for the Team B.
     */
    public void addThreeB(View view) {
        scoreb = scoreb + 3;
        displayTeamscoreb(scoreb);
    }

    /**
     * Add 2 points for the Team B.
     */
    public void addTwoB(View view) {
        scoreb = scoreb + 2;
        displayTeamscoreb(scoreb);
    }

    /**
     * Add 1 point for the Team B.
     */
    public void addOneB(View view) {
        scoreb = scoreb + 1;
        displayTeamscoreb(scoreb);
    }

    /**
     * Displays the given scoreb for Team B.
     */
    public void displayTeamscoreb(int scoreb) {
        TextView scorebView = (TextView) findViewById(R.id.pointsb_text_view);
        scorebView.setText(String.valueOf(scoreb));
    }


    public void reset(View view) {
        scorea = 0;
        scoreb = 0;
        displayTeamscorea(scorea);
        displayTeamscoreb(scoreb);

    }
}

```
### 四、代码优化及 APP 美化 ###
#### style.xml 的设置

- 当每一个 View 都有着大量相同的元素，可以将这些元素定义在
`res/value/styles.xml` 中。

具体的写法如下：

```xml
<style name="cofe_textView">
        <item name="android:textColor">#FFFFFF</item>
        <item name="android:layout_width">wrap_content</item>
       ...

    </style>
```

然后可以用`style="@style/cofe_textView"`语句轻易地重复引用这些设置：

例如：
```xml
<TextView
              style="@style/textView"
              android:id="@+id/teamb_text_view"
              android:text="@string/team_b" />

```

#### 整个 style.xml 代码如下 ####
```xml
<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">
        <!-- Customize your theme here. -->
        <item name="colorPrimary">@color/colorPrimary</item>
        <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
        <item name="colorAccent">@color/colorAccent</item>
    </style>

    <style name="textView">
        <item name="android:layout_width">match_parent</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:fontFamily">sans-serif-medium</item>
        <item name="android:gravity">center</item>
        <item name="android:textColor">#FFFEFE</item>
        <item name="android:textSize">24sp</item>
    </style>

    <style name="pointsTextView">
        <item name="android:layout_width">match_parent</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:fontFamily">sans-serif-medium</item>
        <item name="android:layout_margin">24dp</item>
        <item name="android:gravity">center</item>
        <item name="android:textColor">#2B2A2A</item>
        <item name="android:textSize">56sp</item>
        <item name="android:background">#FFFEFE</item>
    </style>

    <style name="addButtonView">
        <item name="android:layout_width">match_parent</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:layout_marginBottom">8dp</item>
        <item name="android:layout_marginLeft">24dp</item>
        <item name="android:layout_marginRight">24dp</item>
        <item name="android:background">#2B2A2A</item>
        <item name="android:textColor">#FFFEFE</item>
    </style>

    <style name="resetButtonView">
        <item name="android:layout_width">wrap_content</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:layout_marginBottom">32dp</item>
        <item name="android:background">#2B2A2A</item>
        <item name="android:textColor">#FFFEFE</item>
        <item name="android:layout_centerHorizontal">true</item>
        <item name="android:layout_alignParentBottom">true</item>
    </style>

</resources>

```
#### strings.xml ####
- 在 Android 中会将应用中出现的文字放入 string.xml 中，这样一个字符可以重复调用，而不用每次去编写，可以减少数据的冗余，减小 APP 应用的体积。并且当你的 APP 国际化时只需更改 strings.xml 中的文字定义，就可以实现其他语言的显示。

strings.xml 中的字符定义如下：
```xml
<resources>
    <string name="text_name">显示的文字</string>
    ...
</resources>

```
调用时：
```xml
android:text="@string/text_name"
```
#### 整个 strings.xml 代码如下 ####
```xml
<resources>
    <string name="app_name">Court Counter</string>
    <string name="add2b">+2 points</string>
    <string name="add1b">+1 pointsb</string>
    <string name="team_a">Team A</string>
    <string name="add2a">+2 points</string>
    <string name="points_a">0</string>
    <string name="add3a">+3 points</string>
    <string name="add1a">+1 points</string>
    <string name="team_b">Team B</string>
    <string name="points_b">0</string>
    <string name="add3b">+3 points</string>
    <string name="reset_text_views">reset</string>
</resources>

```
### 五、APP 强制锁定横竖屏 ###

- 在最开始做出 APP 时没有考虑到 APP 横屏的问题，偶然一次横屏之后发现 APP 显示不全了，当时也没多想，既然横屏不行，那就去掉横屏显示，锁定在竖屏。上网查了下资料，锁定横竖屏有两种实现方式：XML 或 Java 方式。这个 APP 采用了 XML 锁定方式。

#### XML锁定横屏或竖屏

- 在AndroidManifest.xml中配置,在Activity标签中加入android:screenOrientation="unspecified"，来使某个Activity做横竖屏的变化。

- 使用android:screenOrientation="unspecified"来锁定横竖屏。

  - unspecified：未指明屏幕方向。
  - landscape：锁定为横屏。
  - portrait：锁定为竖屏。

  ##### 具体代码如下：

  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="com.roojay.android.courtcounter">

      <application
          android:allowBackup="true"
          android:icon="@mipmap/ic_launcher"
          android:label="@string/app_name"
          android:supportsRtl="true"
          android:theme="@style/AppTheme" >
          <activity android:name=".MainActivity"
              android:screenOrientation="portrait">
              <intent-filter>
                  <action android:name="android.intent.action.MAIN" />

                  <category android:name="android.intent.category.LAUNCHER" />
              </intent-filter>
          </activity>
      </application>

  </manifest>
  ```

  #### Java代码锁定横竖屏

  - 在onCreate()方法中加入锁定代码。

  ##### 代码如下：

  ```java
  public class MainActivity extends AppCompatActivity {

      @Override
      protected void onCreate(Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);//锁定为横屏
        //setRequestedOrientation(ActivityInfo .SCREEN_ORIENTATION_PORTRAIT);//锁定为竖屏
          setContentView(R.layout.activity_main);
      }
  ```

### 六、APP 演示及源码 ###

- APP 的最终效果图，没有进行多余的其他手机测试，也不知道其他手机显示效果是不是这样。

![]()

演示视频：
[http://omjmn55ir.bkt.clouddn.com/%E7%AF%AE%E7%90%83%E8%AE%A1%E5%88%86%E6%9D%BF%E6%BC%94%E7%A4%BAmp4](http://omjmn55ir.bkt.clouddn.com/%E7%AF%AE%E7%90%83%E8%AE%A1%E5%88%86%E6%9D%BF%E6%BC%94%E7%A4%BAmp4 "演示视频")

源码：
[https://github.com/roojay520/CourtCounter](https://github.com/roojay520/CourtCounter "源码")
