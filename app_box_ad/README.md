#  qq小程序盒子广告通用代码段appBoxAd

## 使用方法

1. 首先需在需要使用的页面引入代码段
```js
import AppBoxAd from "appBoxAd代码段位置";
```
2. 在需要使用的页面执行初始化，再通过按钮调用展示即可。

  示例如下：
``` js
   let appBoxAd = new AppBoxAd("广告id");
   // 在需要展示的地方调用show即可，一般是页面上的一个入口
   appBoxAd.show();
```
