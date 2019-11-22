# 海报生成create_poster

## 使用方法

1. 首先在需要使用的页面js文件中引入代码段，按需引入，无需一次引入全部提供的函数
```js
let CreateSharePoster = require("create_poster.js地址").CreateSharePoster;
```

2. 在要生成的海报的页面wxml上加上一个用于绘制的canvas元素:

    其中canvas-id跟你后面传入的canvas-id保存一致即可

    示例如下：
``` html
<view style='width:0px;height:0px;overflow:hidden;'>
  <canvas canvas-id="canvasid" style="width:720px;height:1280px" />
</view>
```
3. 在需要生成海报的地方按如下示例调用即可：

    new CreateSharePoster(obj);其中obj参数为一个键值对{w:海报宽,h:海报高,list:海报上要绘制的内容，会按数组中位置的先后顺序绘制，层级越高的放越后即可},如果海报无需保存到本地，直接用于分享的，可以在调用createSharePosters时传入第三个参数为false，则不会走是否有授权保存到相册的逻辑

    使用示例如下：
``` js
  let createSharePoster = new CreateSharePoster({
    list:[{
        type: "image",
        image: "../assets/posters_bg.png",
        x: 0,
        y: 0,
        w: 720,
        h: 1280
      },{
        type: "image",
        image: "../assets/header_img.png",
        x: 260,
        y: 525,
        w:200,
        h: 200
      },{
        type: "image",
        image: "../assets/qrcode_img.png",
        x: 250,
        y: 917,
        w: 220,
        h: 220
      },{
        type: "text",
        title: "平头哥",
        font: 36,
        align: "center",
        color: "#B5934B",
        x: 360,
        y: 784
      }]
    });
    createSharePoster.createPosters("canvasid", (res) => {
      console.log("海报生成情况:", res);
    });

```

[使用小程序开发者工具查看演示示例](https://developers.weixin.qq.com/s/mc1ujRmZ7Lcx)
