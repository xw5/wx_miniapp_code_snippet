# 弹窗代码段
## 使用方法

这只是一个弹窗使用模板，base-dialog可以提出全局组件，真正在工作中，你需要把common-dialog改成你自己的弹窗名字，并在指定的区域定制你多样化的弹窗需求

## 配置说明
**有如下配置选项:**

* showClose:        是否要显示关闭文字，默认为true
* btnCloseText:     关闭文字的内容，默认为"点击关闭",当配置为空，关闭按钮也不会显示
* isFixPos:         此配置专为使用自定navigation-bar时弹窗位置修复用的，如果你小程序使用了自定义navigation-bar,且navigation-bar是固定位置的，你弹窗想真正居中则要配置此项为true,默认为false
* isMaskClose:      此配置为实现是否要点击蒙版关闭弹窗，默认为false,为true时，点击蒙版也会关闭当前弹窗
* closeColor:       此配置用于改变关闭文字按钮的颜色，默认不传则颜色为#c6c6c6

**向外暴露的事件：**

* dialogClose： 当点击关闭按钮时会向外触发
* touchMask：   当点击弹层蒙版的时候会向外触发

**向外暴露的方法:**

* setShowClose：      通过此方法设置关闭按钮是否显示
* setShowCloseText：  通过此方法设置关闭按钮文案内容

[使用小程序开发者工具查看演示示例](https://developers.weixin.qq.com/s/pPqMrfms7RaL)