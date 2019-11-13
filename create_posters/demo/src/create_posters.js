const TAG = 'createShareImage';

class ShareImageCreator {
  /**
   * 
   * @param {obj} config {w:720,h:1800,list:[]}由海报宽 海报高 海报要加绘的数据列表
   * list格式参考
    [
      {// 海报背景
        type: "image",
        image: ..., // 海报的背景图片
        x: 0,
        y: 0,
        w: 720,
        h: 1280,
      },{ //头像
        type: "image",
        image: ..., // 默认头像的图片
        x: 260,
        y: 525,
        w:200,
        h: 200,
      },{ //二维码
        type: "image",
        image: ...,// 默认二维码图片
        x: 250,
        y: 917,
        w: 220,
        h: 220,
      },{
        type: "text",
        title: ..., // 默认用户名
        font: 36,
        align: "center",
        color: "#B5934B",
        x: 360,
        y: 784,
      }
    ];
   */
  constructor(config) {
    console.log(TAG, 'ShareImageCreator');
    this.posterw = config && config.w ? config.w : 720;   // 海报宽, 默认720
    this.posterh = config && config.h ? config.h : 1280;   // 海报高, 默认1800
    this.drawList = config && config.list ? config.list : null;  // 海报要绘制数据
  }

  /**
   * // 开始生成海报
   * @param {string} canvasId canvas的id
   * @param {function} callback 回调
   */
  createSharePosters(canvasId, callback) {
    let self = this;
    wx.getSetting({
      success (res) {
        console.log(res.authSetting);
        if (res.authSetting["scope.writePhotosAlbum"]) {
          self.createShareImage(canvasId, callback);
        } else {
          wx.openSetting({
            "scope": "scope.writePhotosAlbum",
            success: function() {
              self.createShareImage(canvasId, callback);
            }
          });
        }
      }
    })
  }

  /**
   * 
   * @param {string} canvasId canvas的id
   * @param {function} callback 回调
   */
  createShareImage(canvasId, callback) {
    let dealWithCount = 0;
    let self = this;
    const len = this.drawList.length;
    this.drawList.forEach((item) => {
      if(item.type === "image") {
        if (item.image.indexOf('https://') == 0) {
          wx.downloadFile({
            url: item.image,
            success: function (res) {
              if (res.statusCode == 200) {
                item.image = res.tempFilePath;
                dealWithCount ++;
                if(dealWithCount === len) {
                  self.drawShareImage(canvasId, callback);
                }
              }
            },
            complete: function () {
              if (item.image.indexOf('https://') == 0) {
                wx.showToast({
                  title: '资源下载失败',
                  icon: 'none'
                });
              }
            }
          });
        } else {
          dealWithCount ++;
          if(dealWithCount === len) {
            self.drawShareImage(canvasId, callback);
          }
        }
      } else {
        dealWithCount ++;
        if(dealWithCount === len) {
          self.drawShareImage(canvasId, callback);
        }
      }
    });
  }

  drawShareImage(canvasId, callback) {
    const ctx = wx.createCanvasContext(canvasId);
    let self = this;
    this.drawList.forEach((item) => {
      if (item.type === "image") {
        this.drawImage(ctx, item);
      } else {
        this.drawText(ctx, item);
      }
    });
    console.log(TAG, "draw finish");

    ctx.draw(true, function() {
      console.log(TAG, "canvas draw finish");
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: self.posterw,
        height: self.posterh,
        destWidth: self.posterw,
        destHeight: self.posterh,
        canvasId: canvasId,
        success: function(res) {
          console.log(TAG, "canvasToTempFilePath", res);
          self.doSaveImage(res.tempFilePath, callback);
        }
      });
    });
  }

  /**
   * 
   * @param {string}} imagePath 图片临时路径
   */
  doSaveImage(imagePath, callback) {
    wx.saveImageToPhotosAlbum({
      filePath: imagePath,
      success: function() {
        console.log(TAG, "wx.saveImageToPhotosAlbum success ", imagePath);
        wx.showToast({
          title: '已保存图片到相册',
          icon: 'none'
        });
        callback && callback(imagePath);
      },
      fail: function() {
        console.log(TAG, "wx.saveImageToPhotosAlbum failed ", imagePath);
        wx.showToast({
          title: '保存图片到相册失败',
          icon: 'none'
        });
        callback && callback(null);
      }
    });
  }

  /**
   * 
   * @param {obj} ctx  canvas绘制对象
   * @param {obj} obj  要绘制的内容
   */
  drawImage(ctx, obj) {
    ctx.drawImage(
      obj.image,
      obj.x,
      obj.y,
      obj.w,
      obj.h);
  }
  /**
   * 
   * @param {obj} ctx  canvas绘制对象
   * @param {obj} obj  要绘制的内容
   */
  drawText(ctx, obj) {
    ctx.setFillStyle(obj.color);
    ctx.setFontSize(obj.font);
    ctx.setTextAlign(obj.align);
    ctx.fillText(obj.title, obj.x, obj.y);
  }
}

module.exports.ShareImageCreator = ShareImageCreator