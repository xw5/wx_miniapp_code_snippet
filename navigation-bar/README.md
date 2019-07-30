# 自定义navigation-bar
## 使用方法

1. 首先需在app.json增加如下配置
```json
{
  "window": {
    "navigationStyle": "custom"
  }
}
```
2. 在app.json中全局引入导航，如只是部分页面使用可以在页面对应的json中引入组件
``` json
{
  "usingComponents": {
    "navigation-bar": "navigation-bar存放目录"
  }
}
```
## 配置说明
**此导航栏有如下配置选项:**

* titleBgColor:     导航栏背景色,默认为白色#fff
* titleColor:       标题栏字体颜色，默认为黑
* title:            标题栏内容，默认为空
* isShowBack：      是否要展示返回按钮
* linkConfig：      按钮跳转配置,跳转小程序{appId:*,path:*,extraData:*}
* isFixed：         标题栏是否要固定,默认为true,true为固定位置，false是不固定
* isCatchBack:      是否要截持back，默认为false，做挽回弹窗什么的,设为true后点击返回按钮会向外触发backAction事件，当此值为false时，返回功能和跳小程序功能内部都处理了，当为true时候，需在外监听backAction事件，来实现自己的功能，如果返回键是跳小程序的，会通过e.detail会把linkConfig值暴露出去。

**向外暴露的事件：**

* backAction： 当isCatchBack为true时点击返回会向外传递此事件
* startNavigate：当isCatchBack为false时，且返回是跳小程序时，点击返回会首先向外传递此事件
* navigateOk：当isCatchBack为false时，且返回是跳小程序时，点击返回跳转小程序成功时会向外传递此事件
* navigateFail：当isCatchBack为false时，且返回是跳小程序时，点击返回跳转小程序失败时会向外传递此事件

**向外暴露的方法:**

* getHeight,通过此函数能够获取当前navigationBar的高度，用于外界元素的适配使用

[点击此处使用查看演示示例](https://developers.weixin.qq.com/s/pPqMrfms7RaL)