#  小程序的兼容判断常用代码段can_use_util

## 使用方法

1. 首先需在需要使用的页面引入代码段
```js
import CanUseUtil from "can_use_util代码段位置";
```
2. 在需要判断的地方调用相应api即可。

  示例如下：
``` js
  // 版本判断
  let status = CanIUseUtil.compareVersion('1.10.0');
  if (status >= 0) {
    // 当前基础库版本大于等于1.10.0逻辑

  } else {
    // 当前基础库版本小于1.10.0逻辑
    
  }

  // 判断小程序的API，回调，参数，组件等是否在当前版本可用,具体使用方法见小程序官方文挡canIuse
  let isSupport = CanIUseUtil.isSupport('createInterstitialAd');
  if (isSupport) {
    // 支持逻辑

  } else {
    // 不支持逻辑

  }
```
