# 小程序接口请求Promise包装代码段common_request

## 使用方法

1. 首先需在需要使用的页面引入代码段，并修改代码段里的常量值BASE_URL为你的接口域名,当然如果想传全路径，不修改BASE_URL常量值也是可行的
```js
import request from "common_request代码段位置";
```
2. 在需要请求接口数据的地方按后端要求调用拿取服务端数据，详细使用可参数代码段里参数说明。

  示例如下：
``` js
  request("接口地址",{"key值":"数据值",...}).then((res) => {
    console.log("执行成功后操作");
  }).catch((err) => {
    console.log("请求失败后操作");
  });
```
