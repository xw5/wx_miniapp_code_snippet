# 常用圆形进度条ring-progress-bar-canvas
## 大致预览
![ring-progress-bar-canvas动图](/assets/ring_progress_bar_canvas.gif)

## why
代码段里有一个ring-progress-bar组件，为什么还要提供一个canvas版，从性能和扩展方面，canvas方案都是优于html版的，所以没有在小程序原生组件使用限制范围内的情况推荐使用canvas版 [原生组件的使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#%E5%8E%9F%E7%94%9F%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6)，同时canvas支持配置开始和结束角度，可以绘制像表盘一样的图表。

## 使用方法

1. 在对应页面的json中引入组件
``` json
{
  "usingComponents": {
    "ring-progress-bar-canvas": "ring-progress-bar-canvas存放目录"
  }
}
```
2. 在使用的地方插入组件即可，value为必传属性,值范围为0-1，圈的默认属性如下：大小为118rpx正圆;进度条粗细为10rpx;不带底色;进度条颜色为#FF3356;不显示进度数字。   

    假设你想定义当前进度在0.4，圈大小为110rpx，进度条粗细为8rpx，带底色的#ccc，且显示字体大小42rpx，字体颜色为#f00进度数字，带%符号,则可按下配置即可：
``` html
  <ring-progress-bar-canvas
  value="{{0.4}}"
  size="{{110}}"
  progressWidth="{{8}}"
  baseColor="#ccc"
  fontSize="{{42}}"
  fontColor="#f00"
  symbolUnit="%"
  ></ring-progress-bar-canvas>
```
## 配置说明

**可配置项：**

* size： 圈大小，单位为px,默认不配则为118rpx
* value: 必传属性，内部进度条填充进度配置项，范围为0-1
* progressWidth进度条粗细，默认为10rpx
* progressColor进度条颜色,默认为#FF3356
* lineCap定义弧形端点样式：butt(默认) square(正方形) round(圆形)
* baseColor进度条底色颜色，默认为空，不配则不显示底色
* fontSize圈中间数字显示大小，默认为0，不显示数字
* fontColor圈中间数字颜色
* decimalDigits圈中间数字要保留的小数位数
* symbolUnit圈中数字是否要显示符号如%等，默认不显示
* maxValue圈中数字最大值，默认为100，当value为1时显示maxValue，其它值则按value换算显示，如value为0.6时，配置的maxValue为500，则圈中数字显示为300
* startAngle进度圆环开始绘制角度，默认为0
* endAngle进度圆环结尾角度，默认为360

[使用小程序开发者工具查看演示示例](https://developers.weixin.qq.com/s/1hYQM4mE7LeS)