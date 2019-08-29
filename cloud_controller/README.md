# 云控代码段cloud_controller

## 使用方法

1. 首先需在需要使用的页面引入代码段
```js
import cloudController from "../../utils/cloud_controller";
```
2. 在需要拉取的地方调用云端json配置数据,并通过getValue获取云端数据，再根据云端数据做不同的操作，这样可以减少对服务端的接口依赖和减少后期的维护成本，此代码段有对请求次数做优化：

    1. 当loadFromCloud过一次拿到数据后再请求默认不会再发起请求，而是直接回调已经存储在内存中的数据。
    2. 当一次loadFromCloud多个，只有第一次请求会真正发起请求，所有回调都会压入一个回调数组中，拿到请求数据后再一次调用所有回调。
``` js
  cloudController.loadFromCloud((res) => {
      console.log("cloudData:", res);
      cloudController.getValue("isShowActivityEntry", false);
  });
```

注：此种方案是对于那种想节省成本不想做管理后台的的情况是十分可行的，需要注意的是，配置文件后期一般都是交给运营管理配置的，但并不是所有运营都对json有了解，json是有严格的数据格式要求的，主要如下：

1. JSON的key需要使用双引号，不能使用单引号
2. key/value必须成对存在
3. 每对key/value之间需要加逗号

json示例：
``` json
{
  "key0":1,
  "key1":true,
  "key2":[1,2,3],
  "key3":{
    "keyin0":1,
    "keyin1":"123"
  }
}
```

推荐每次写好配置去这个网站进行验证再投入使用
[JSON格式校验网站](https://www.json.cn/)
