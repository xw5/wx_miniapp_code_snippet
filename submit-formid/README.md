# 常用formId收集组件submit-formid
## 大致预览
![submit-formid动图](/assets/submit-formid.gif)

## why
小程序端是支持模板消息通知的，但是是有一定的触发条件，用户有支付行为或者有执行表单提交，因此，这个组件就用于触发表单提交上传formid用的，微信的模板消息触发条件说明可查看官方文挡[模板消息下发条件说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/template-message.html#%E4%B8%8B%E5%8F%91%E6%9D%A1%E4%BB%B6%E8%AF%B4%E6%98%8E)

## 使用方法

1. 在对应页面的json中引入组件,或者在app.json中全局引入
``` json
{
  "usingComponents": {
    "submit-formid": "submit-formid存放目录"
  }
}
```
2. 在使用的地方插入组件即可，组件外监听catchSubmit事件用于formid获取。   

    如下代码段的意思是在formidReport里做数据上报，testFn里处理原按钮上的事件，通过dataset传递参数：
``` html
  <submit-formid 
    bind:catchSubmit="formidReport"
    bind:tap="testFn"
    data-test="123"
  >
    <view class="test_btn">测试上报按钮</view>
  </submit-formid>
```
## 配置说明

**可配置项：**

* isNeedReport： 是否要触发formid上报，默认为true，如果改为false，则不会向外触发catchSubmit事件
* catchSubmit： 组件向外暴露的事件，在此事件方法内可以获取formid并上报


[使用小程序开发者工具查看演示示例](https://developers.weixin.qq.com/s/yWIBRYmn7uah)