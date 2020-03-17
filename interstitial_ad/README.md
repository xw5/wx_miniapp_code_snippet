#  小程序插屏广告通用代码段 interstitial_ad

## 使用方法

1. 首先需在需要使用的页面引入代码段
```js
import InterstitialAd from "interstitial_ad代码段位置";
```
2. 在需要使用的页面执行初始化，如果符合展示条件则会展示一次广告（小程序启动30内不允许展示，上一次展示的60s内不允许展示），初次加载会主动执行一次show。

  示例如下：
``` js
   let interstitialAd = new InterstitialAd("广告id");
   // 初次加载会主动执行一次show,后面如果需再展示，则主动调用show即可
   interstitialAd.show();
```
