import {
  getStorageSync, 
  setStorageSync, 
  getStorage, 
  setStorage, 
  setStorageForToday, 
  getStorageForToday
} from "../src/common_storage";

Page({
  data: {

  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  getStorageSync: function() {
    let testValue = getStorageSync("test");
    console.log("getStorageSync同步获取本地存储test",testValue)
  },
  setStorageSync: function() {
    setStorageSync("test",123456);
  }, 
  getStorage: function() {
    getStorage("test0").then((data) => {
      console.log("getStorage异步获取本地存储test0", data);
    }).catch((e) => {
      console.log("getStorage异步获取本地存储test0失败",e);
    })
  }, 
  setStorage: function() {
    setStorage("test0",123456).then(() => {
      console.log("setStorage异步设置本地存储test0成功");
    })
  }, 
  setStorageForToday: function() {
    setStorageForToday("testToday");
  }, 
  getStorageForToday: function() {
    let testToday = getStorageForToday("testToday");
    console.log("是否今天已经存储过testToday为今天日期的标示", testToday);
  }
})
