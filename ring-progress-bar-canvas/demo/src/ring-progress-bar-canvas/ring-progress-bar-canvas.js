// pages/components/ring-progress-bar-canvas/ring-progress-bar-canvas.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前进度
    value:{
      type: Number,
      value: 0,
      observer: function(newVal, oldValue) {
        // console.log(newVal, oldValue,this.firstEnter);
        if (this.firstEnter === 0) {
          this.drawCircle(newVal);
        }
      }
    },

    // 进度条尺寸
    size:{
      type:Number,
      value: 118
    },

    // 开始角度
    startAngle:{
      type:Number,
      value: 0
    },

    // 结束角度
     endAngle:{
      type:Number,
      value: 360
    },

    // 进度条宽度
    progressWidth:{
      type:Number,
      value:10
    },

    // 进度条高亮颜色
    progressColor:{
      type: String,
      value: "#FF3356"
    },

    // 进度条灰色填充颜色，如果为空，则是不需要灰色颜色
    baseColor:{
      type: String,
      value: ""
    },

    // 进度字体颜色
    fontColor:{
      type: String,
      value: "#FF3356"
    },

    // 进度字体大小
    fontSize:{
      type: Number,
      value: 0
    },

    // 数字要显示的精度
    decimalDigits: {
      type: Number,
      value: 0
    },

    // 要添加的单位符号
    symbolUnit: {
      type: String,
      value: ''
    },

    // 进度值要显示的最大值，默认为100
    maxValue: {
      type: Number,
      value: 100
    },

    lineCap: {
      type: String,
      value: "butt"
    }
  },
  data: {
    progressImg: ""
  },
  drawRatio: 1,
  firstEnter: 1,
  createProgressImgTimer: null,

  lifetimes:{
    attached: function() {
      let winW = wx.getSystemInfoSync().windowWidth;
      let designW = 750;
      this.drawRatio = winW / 750;
    },
    ready: function() {
      this.circleCanvas = wx.createCanvasContext("circleCanvas", this);
      this.drawCircle();
      this.firstEnter = 0;
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 画圈
     * @param {number} value 当前进度值
     */
    drawCircle: function(valueParam) {
      let {progressColor, size, progressWidth, value, baseColor, lineCap, startAngle, endAngle} = this.properties;
      this.setData({
        progressImg: ""
      });
      clearTimeout(this.createProgressImgTimer);
      if (!valueParam) {
        valueParam = value;
      }
      if (!this.circleCanvas) {
        this.circleCanvas = wx.createCanvasContext("circleCanvas", this);
      }
      this.circleCanvas.save()
      this.circleCanvas.clearRect(0, 0, Math.floor(size*this.drawRatio), Math.floor(size*this.drawRatio));
      this.circleCanvas.translate(Math.floor(size/2*this.drawRatio), Math.floor(size/2*this.drawRatio));
      this.circleCanvas.rotate(270*Math.PI/180);
      // 如果有底边
      if (baseColor) {
        this.circleCanvas.beginPath();
        this.circleCanvas.setStrokeStyle(baseColor);
        this.circleCanvas.setLineWidth(Math.floor(progressWidth*this.drawRatio));
        this.circleCanvas.setLineCap(lineCap);
        this.circleCanvas.arc(0, 0, Math.floor((size/2 - progressWidth)*this.drawRatio), startAngle * Math.PI / 180 , endAngle * Math.PI / 180, false);
        this.circleCanvas.stroke();
      }
      if(valueParam > 0) {
        this.circleCanvas.beginPath();
        this.circleCanvas.setStrokeStyle(progressColor);
        this.circleCanvas.setLineWidth(Math.floor(progressWidth*this.drawRatio));
        this.circleCanvas.setLineCap(lineCap);
        this.circleCanvas.arc(0, 0, Math.floor((size/2 - progressWidth)*this.drawRatio), startAngle * Math.PI / 180, (startAngle+(endAngle - startAngle)*valueParam)*Math.PI / 180, false);
        this.circleCanvas.stroke();
      }
      this.circleCanvas.restore()
      this.circleCanvas.draw(true,() => {
        this.createProgressImgTimer = setTimeout(() => {
          this.getProgressImg();
        },1500);
      });
    },
    /**
     * 获取canvas画布内容
     */
    getProgressImg() {
      var self = this;
      let {size} = this.properties;
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        quality:1,
        width: size * self.drawRatio,
        height: size * self.drawRatio,
        destWidth: size,
        destHeight: size,
        canvasId: "circleCanvas",
        success: function(res) {
          console.log("canvasToTempFilePath:", res.tempFilePath);
          if (res.tempFilePath) {
            self.setData({
              progressImg: res.tempFilePath
            })
          }
        },
        fail: function(err) {
          console.log("canvasToTempFilePath:", err);
        }
      }, this);
    }
  }
})
