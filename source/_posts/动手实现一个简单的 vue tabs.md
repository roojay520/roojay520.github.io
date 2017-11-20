---
title: 动手实现一个简单的 vue tabs
mathjax: true
date: 2017-11-20 12:31:14
abbrlink:
tags:
    - tabs
    - vue
categories: Vue
---
## 动手写一个简单的 vue tabs 切换页

使用第三方的框架的组件进行布局时, 发现出来的效果和自己想要的总是差一点, 所以自己动手写了一个 tabs 选项卡.

整个选项卡分为两个部分: 上半部分的标题和下半部分的内容. 要求是: 当点击到某个选项时, 选项下的光标随之切换, 下半部分的内容更新.

HTML 部分: 将这个 tabs 分为 title 和 views 两个部分, title 部分使用 v-for 循环将一个存着标题的数组渲染到页面中去, views 部分根据当前选择选项的 index 显示对应的内容.

```html
<template>
  <div id="tabs">
    <div class="titles">
      <ul>
        <li v-for="(goods,index) in goods"
          :key="goods.index"
          @click="toggle(index)">
          <span :class="{selected:select==index}">{{goods.text}}</span>
        </li>
      </ul>
    </div>

    <div class="views">
      {{views[select].text}}
    </div>
    <component :is="currentView">1</component>
  </div>
</template>
```

JavaScript 部分: 一个 title 数组和一个内容数组 views, 一个select 标识符, 用来确定被选中选项的 index 值, 还包括一个 toggle 方法用来响应鼠标点击更改 select 的值.
```javascript
<script>
  export default {
    data() {
      return {
        select: 0,
        goods: [
          {text: '下单'},
          {text: '挂单'},
          {text: '外卖'},
          {text: '团购'}],
        views: [
          {text: '下单页面'},
          {text: '挂单页面'},
          {text: '外卖页面'},
          {text: '团购页面'}]
        };
    },
    methods: {
      toggle(index) {
        this.select = index;
      }
    }
  };
```

CSS 部分: 这个主要问题是鼠标点击切换标题时, 下面的光标随之移到, 最开始使用 border-bottom 来作为光标, 但发现样式不好控制. 最后使用伪元素, 解决下光标问题. 为标题加一个 span 标签, 给其绑定一个动态的的 class selected, 当前选择元素的 select 和 当前的 index 相等时, 为其添上一个 selected 类.
```css
<style lang="scss">
  #tabs {
    display: flex;
    // 让整个页面绝对居中
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 30%;
    height: 100%;
    margin: auto;
    padding: 0;
    padding: 0 1em;

    font-size: 16px;

    background-color: #fff;

    flex-direction: column;
    .titles {
      ul {
        display: flex;

        list-style: none;

        width: 100%;
        margin: 0 0 1em 0;
        padding: 0;
        border-bottom: 2px solid rgba(0, 0, 0, .18);

        flex-direction: row;
        justify-content: space-between;
        li {
          display: inline;

          margin: 1em 0;
          &:hover {
            cursor: pointer;
          }
          span {
            position: relative;

            padding: 1em 0;
            // 下划线
            &::after {

              display: block;
              content: "";
              position: absolute;
              top: 3.125em; // 文字高度 加上文字上下 padding 值加上父元素 border-bottom 的宽度
              left: 0;

              width: 2em; // 下划线初始两个字宽度
              height: 3px;

              background-color: #409eff;

              transition: transform .3s ease-in-out; // 设置缓入缓出效果
              transform: scale(0, 1); // 将 x 轴缩放为 0
              transform-origin: 50%; // transform-origin 属性允许改变被转换元素的位置
            }
          }
        }
        // 选中时样式
        .selected {
          color: #409eff;
          &::after {
            transform: scale(1, 1); // 选中时恢复
          }
        }
      }
    }
  }
</style>
```
