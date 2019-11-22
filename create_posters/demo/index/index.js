const app = getApp()
let CreateSharePoster = require("../src/create_posters.js").CreateSharePoster;
Page({
  data: {

  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  onReady: function () {
    
  },
  openSettingFn: function(e) {
    var self = this;
    wx.openSetting({
      "scope": "scope.writePhotosAlbum",
      success: function() {
        console.log("授权成功!");
        self.createPosters();
      }
    });
  },
  createPosters: function() {
    let createSharePoster = new CreateSharePoster({
      list:[{
          type: "image",
          image: "../assets/posters_bg.png",
          x: 0,
          y: 0,
          w: 720,
          h: 1280
        },{
          type: "image",
          image: "../assets/header_img.png",
          x: 260,
          y: 525,
          w:200,
          h: 200
        },{
          type: "image",
          image: "../assets/qrcode_img.png",
          x: 250,
          y: 917,
          w: 220,
          h: 220
        },{
          type: "text",
          title: "平头哥",
          font: 36,
          align: "center",
          color: "#B5934B",
          x: 360,
          y: 784
        }]
    });
    createSharePoster.createPosters("canvasid", (res) => {
      console.log("海报生成情况:", res);
    });
  }
})
