# 常用hand-guide
## 大致预览
![hand-guide动图](/assets/hand-guide-img.gif)

## 使用方法

1. 在对应页面的json中引入组件
``` json
{
  "usingComponents": {
    "hand-guide": "hand-guide存放目录"
  }
}
```
2. 在使用的地方插入组件即可，一般都需要给组件加额外的样式，定位组件的位置，引导一般都是放按钮上，如果想透过引导区域点击到下面按钮，可以给引导组件增加css **pointer-events:none;** 或者监听组件向外暴露的事件hanClick完成交互
``` html
  <hand-guide></hand-guide>
```
## 配置说明

**向外暴露的事件：**

* handClick： 当引导区域被点击的时候触发

**向外暴露的方法:**

* show,用于显示引导，默认就是显示的
* hide,用于隐藏引导区域

[使用小程序开发者工具查看演示示例](https://developers.weixin.qq.com/s/XrKnnfml7PaF)