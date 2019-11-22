# 常用广告组件 common_ad

## why
小程序有banner广告，每次接的时候需要监听广告加载状态，以做显示隐藏处理，此组件只需传入广告id，内部会根据广告状态做显示隐藏

## 使用方法

1. 在对应页面的json中引入组件,或者在app.json中全局引入
``` json
{
  "usingComponents": {
    "common-ad": "common_ad存放目录"
  }
}
```
2. 在使用的地方插入组件即可，组件外可监听adLoadCallback事件用于获取广告状态。   

    如下代码段的意思是在adLoadCallback获取广告状态回调， width为广告宽度，默认不填则填满父组件宽度， adType可填banner/card(qq)：
``` html
  <common-ad
    unitId="test123456789"
    adType="banner"
    width="{{750}}"
    bind:adLoadCallback="adLoadCallback"
  />
```
## 配置说明

**可配置项：**

* unitId： 广告id
* adType： 广告类型banner/card(qq特有)
* width： 广告宽度
* adLoadCallback： 组件向外暴露的事件，在此事件方法内可以获取广告状态