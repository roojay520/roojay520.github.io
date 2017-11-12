---
title: Gradle基础
tags: Gradle
abbrlink: 691946d1
categories: Android
date: 2017-06-17 12:38:36
---

## Roay/app/build.gradle

* 这个文件是app文件夹下这个Module的gradle配置文件，也可以算是整个项目最主要的gradle配置文件。

  ​

### 文件内容如下：

```java
// 声明是Android程序
apply plugin: 'com.android.application'

android {
    // 编译SDK的版本
    compileSdkVersion 21
    // build tools的版本
    buildToolsVersion "21.1.1"

    defaultConfig {
    	// 应用的包名
        applicationId "ly.roay"
        minSdkVersion 14
        targetSdkVersion 21
        versionCode 1
        versionName "1.0.0"
    }

    // java版本
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_7
        targetCompatibility JavaVersion.VERSION_1_7
    }

    buildTypes {
        debug {
            // debug模式
        }

        release {
            // 是否进行混淆
            minifyEnabled false
            // 混淆文件的位置
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.txt'
        }
    }

    // 移除lint检查的error
    lintOptions {
      abortOnError false
    }
}

dependencies {
    // 编译libs目录下的所有jar包
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile 'com.android.support:support-v4:21.0.2'
    compile 'com.etsy.android.grid:library:1.0.5'
    compile 'com.alexvasilkov:foldable-layout:1.0.1'
    // 编译extras目录下的ShimmerAndroid模块
    compile project(':extras:ShimmerAndroid')
}
```

## Roay/build.gradle

* 这个文件是整个项目的gradle基础配置文。

* 内容主要包含了两个方面：一个是声明仓库的源，这里可以看到是指明的jcenter(), 之前版本则是mavenCentral(), jcenter可以理解成是一个新的中央远程仓库，兼容maven中心仓库，而且性能更优。另一个是声明了android gradle plugin的版本，android studio 1.0正式版必须要求支持gradle plugin 1.0的版本。

  ### 文件内容如下：

  ```java
  // Top-level build file where you can add configuration options common to all sub-projects/modules.

  buildscript {// Top-level build file where you can add configuration options common to all sub-projects/modules.

  buildscript {
      repositories {
          jcenter()
      }
      dependencies {
          classpath 'com.android.tools.build:gradle:1.0.0'
      }
  }

  allprojects {
      repositories {
          jcenter()
      }
  }
      repositories {
          jcenter()
      }
      dependencies {
          classpath 'com.android.tools.build:gradle:2.2.0'

          // NOTE: Do not place your application dependencies here; they belong
          // in the individual module build.gradle files
      }
  }

  allprojects {
      repositories {
          jcenter()
      }
  }

  task clean(type: Delete) {
      delete rootProject.buildDir
  }
  ```

  ​

  ​