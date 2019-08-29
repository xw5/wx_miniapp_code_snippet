# wx_miniapp_code_snippet
## 简介
这是一个收集平时开发常用的小程序代码段仓库,希望能为平时开发提高一点点效率。
1. navigation-bar 这是一个自定义的navigator-bar，可以实现一些物殊需求，如想监听返回动作，标题样式想多样化等...。
2. hand-guide 这是一个模拟手指点击效果的吸引用户点击的常用代码段。
3. common-dialog 这是弹窗代码段，可以以common-dialog为基础定制你自己的弹窗。
4. ring_progress_bar 这是圆形进度条代码段，可以用于展示圆形进条或者当计时器用等...。
5. cloud_controller 这是一个无需后端提供接口和管理后台，即可配置页面功能的简化方案，由于代码比较简单,没有提供dome。
6. submit-formid 这是一个用于formid上报的小程序自定义组件代码段。
7. common_request 这是小程序接口请求wx.request的Promise包装，由于代码比较简单,没有提供dome。

**持续更新中...**

## 项目目录结构说明
每个代码段基本都是一样目录结构，此处我们以navigation-bar为例,dome下为演示的小程序代码片段（用于学习参考使用），src目录下的为当前代码段的源码，也就是你需要放到你代码中的。
``` markdown
navigation-bar
├─dome
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