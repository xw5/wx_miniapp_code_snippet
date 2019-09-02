# 本地存储代码段common_storage

## 使用方法

1. 首先需在需要使用的页面引入代码段，按需引入，无需一次引入全部提供的函数
```js
import {
  getStorageSync, 
  setStorageSync, 
  getStorage, 
  setStorage, 
  setStorageForToday, 
  getStorageForToday
} from "common_storage目录";
```
2. 在要做本地存储操作的地方调用函数即可，主要函数功能说明如下：

  * getStorageSync同步获取本地存储值
  * setStorageSync同步设置本地在储值
  * getStorage异步获取本地存储值Promise版
  * setStorage异步设置本地存储值Promise版 
  * setStorageForToday设置一个存储值为当天的标示
  * getStorageForToday判断当前存储值是否为当天

  使用示例如下：
``` js
  // 设置本地存储中test的值为123 
  setStorageSync("test",123);

  // 获取本地存储中key为test的值 
  let testValue = getStorageSync("test");

  // 异步存储本地存储中key为test0的值 
  setStorage("test0");

  // 获取本地存储中key为test0的值 
  let test0Value = null;
  getStorage("test0").then((data) => {
    test0Value = data;
  }).catch(() => {});

  // 存储本地存储中key为testToday的值为当天日期，如20190902
  setStorageInToday("testToday");

  // 判断本地存储中key为testToday的值是否是当天
  let test1Status = judgeStorageIsToday("testToday");
```

[使用小程序开发者工具查看演示示例](https://developers.weixin.qq.com/s/Dj1705mT76ba)
