---
title: Map和Set
date: 2017-09-11 11:14:28
tags: javascript
---
## Map 键值对
> 一组键值对结构，查找速度快。储存具有映射关系的数据，例如身份证上面的姓名和身份证号码。

### Map 函数
```javascript
var map = new Map(); // 初始化 Map
map.set('XiaoMing', 22); // 添加键值对 key-value
map.set('HaHa', 66);
map.has('HaHa'); // 是否存在 'HaHa', 返回值为 true
map.get('XiaoMing'); // 22  获得对应的 value
map.delete('HaHa'); // 删除 key: 'HaHa'
```
一个 key 只能对应一个 value，对同一个 key，后添加的 value 会覆盖前面的 value。

## Set
> 一组 Key 值的集合，无序且不重复，不储存 Value。

### Set 函数
```javascript
var set = new Set(); // 初始化 Set
set.add(6); // 添加 Key 6
set.delete(6); // 删除 Key 6
```