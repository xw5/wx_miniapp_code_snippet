# 常用圆形进度条ring_progress_bar
## 大致预览
![ring-progress-bar动图](/assets/ring_progress_bar.gif)

## why
小程序端是支持canvas的，实现这种圆环进度用canvas应该是最理想的，但是小程序有坑，像canvas等原生组件是有使用限制的，见官方文挡 [原生组件的使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#%E5%8E%9F%E7%94%9F%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6),我就踩到这个坑了，因此就用纯html的方式实现了这种圆环进度效果。

## 使用方法

1. 在对应页面的json中引入组件
``` json
{
  "usingComponents": {
    "ring-progress-bar": "ring-progress-bar存放目录"
  }
}
```
2. 在使用的地方插入组件即可，value为必传属性,值范围为0-1，圈的默认属性如下：大小为118px正圆;进度条粗细为10px;不带底色;进度条颜色为#FF3356;不显示进度数字。组件会按750设计稿做缩放适配。   

    假设你想定义当前进度在0.4，圈大小为110px，进度条粗细为8px，带底色的#ccc，且显示字体大小42px，字体颜色为#f00进度数字，带%符号,则可按下配置即可：
``` html
  <ring_progress_bar
  value="{{0.4}}"
  size="{{110}}"
  progressWidth="{{8}}"
  baseColor="#ccc"
  fontSize="{{42}}"
  fontColor="#f00"
  symbolUnit="%"
  ></ring_progress_bar>
```
## 配置说明

**可配置项：**

* size： 圈大小，单位为px,默认不配则为118px
* value: 必传属性，内部进度条填充进度配置项，范围为0-1
* progressWidth进度条粗细，默认为10px
* progressColor进度条颜色,默认为#FF3356
* baseColor进度条底色颜色，默认为空，不配则不显示底色
* fontSize圈中间数字显示大小，默认为0，不显示数字
* fontColor圈中间数字颜色
* decimalDigits圈中间数字要保留的小数位数
* symbolUnit圈中数字是否要显示符号如%等，默认不显示
* maxValue圈中数字最大值，默认为100，当value为1时显示maxValue，其它值则按value换算显示，如value为0.6时，配置的maxValue为500，则圈中数字显示为300


[使用小程序开发者工具查看演示示例](https://developers.weixin.qq.com/s/FbrmZOmM7Oa3)