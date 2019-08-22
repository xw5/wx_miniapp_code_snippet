const app = getApp()

Page({
  data: {
    per:0
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  onReady: function() {
    setInterval(() => {
      let {per} = this.data;
      per = per > 1 ? 0 :per;
      per=(per*100+1) / 100;
      this.setData({
        per: per
      })
    },300);
  }
})
