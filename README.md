# wx_miniapp_code_snippet
## 简介
这是一个收集平时开发常用的小程序代码段仓库,希望能为平时开发提高一点点效率。
1. navigation-bar 这是一个自定义的 **navigator-bar** ，可以实现一些物殊需求，如想监听返回动作，标题样式想多样化等...。
2. hand-guide 这是一个**模拟手指点击效果**的吸引用户点击的常用代码段。
3. common-dialog 这是**弹窗**代码段，可以以common-dialog为基础定制你自己的弹窗。
4. ring-progress-bar 这是**圆形进度条非canvas版**代码段，可以用于展示圆形进条或者当计时器用等...，当你使用的场景在小程序原生组件的限制范围内时推荐使用此组件，否则推荐给使用它的canvas版。
5. ring-progress-bar-canvas 这是ring-progress-bar**圆形进度条代码段的canvas版**，可以用于展示圆形/表盘进条或者当计时器用等...。
6. cloud_controller 这是一个**无需后端提供接口和管理后台，即可配置页面功能的简化方案**，由于代码比较简单,没有提供demo。
7. submit-formid 这是一个用于**formid上报**的小程序自定义组件代码段。
8. common_request 这是小程序接口请求**wx.request的Promise包装**，由于代码比较简单,没有提供demo。
9. common_storage 这是小程序**本地存储的一些方法封装**，同步版和异步的Promise包装版，同时提供用于标示当天的本地存储方法。
10. create_poster 这是小程序生成**分享海报**的代码段，支持网络图片和本地小程序图片
11. create_rewarded_video_ad 这是小程序**激励视频接入**的代码段，解决首次加载状态失败生close多次调用问题
12. common_ad 这是小程序**banner/card(qq)广告**的通用代码段，更方便使用广告组件

**持续更新中...**

## 项目目录结构说明
每个代码段基本都是一样目录结构，此处我们以navigation-bar为例,demo下为演示的小程序代码片段（用于学习参考使用），src目录下的为当前代码段的源码，也就是你需要放到你代码中的。
``` markdown
navigation-bar
├─demo
│  ├─catchback
│  ├─hasback
│  ├─index
│  ├─navigatorapp
│  ├─src
│  │  └─navigation-bar
│  └─style
└─src
    └─navigation-bar
```