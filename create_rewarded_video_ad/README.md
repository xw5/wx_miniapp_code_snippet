# 激励视频通用方法create_rewarded_video_ad

## 大致预览
![create_rewarded_video_ad动图](/assets/create_rewarded_video_ad.gif)

 ## 几个实用的方法

* reload 重新加载激励视频广告
* clearCallBack 清除看完广告关闭的回调
* clearMidCallBack 清除未看完广告的关闭的回调
* clearErrorCallBack 清除播放失败的回调
* clearAll 清除所有（正常关闭，非正常关闭，播放失败）回调

提供的清除方法主要是为了防止在单例模式下，回调错乱的问题，多次使用同一个广告位的时候推荐把上一次的清掉

## 使用方法

1. 首先在需要使用的页面js文件中引入代码段
```js
  let RwwardVideoAd = require("create_rewarded_video_ad路径").RwwardVideoAd;;
```

2. 在需要且到激励视频广告的地方接入即可：

  注：一个页面的广告是一个单例，推荐一个页面里的功能用一个广告id,如果要使用多例模式，可以除id外多传第二个参数为true，开启多例模式，从文挡看微信从2.8.0开始支持，qq文挡暂未说有支持多例模式，所以推荐单例模式
    
  使用示例如下：
``` js
  Page({
  rewardObj: null,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.rewardObj = new RwwardVideoAd("广告id");
    // 监听广告加载状态
    this.rewardObj.adLoadStatusBack = function(mark) {
      console.log("测试广告加载状态", mark);
    }

  },

  /**
  * 播放激励视频广告并绑定相关事件，在不同事件中做相应功能即可
  */
  startLookVideo: function() {

    // 绑定观看完点击关闭的回调
    this.rewardObj.closeCallBack = function() {
      console.log("测试广告播放完拿奖励喽!");
    }

    // 绑定未观看完就关闭广告回调
    this.rewardObj.closeMidCallBack = function() {
      console.log("测试广告未播放完无奖励哦!");
    }

    // 播放广告
    this.rewardObj.show();
  }
})

```

由于小程序开发者激励视频无法调试，暂无演示代码段。
