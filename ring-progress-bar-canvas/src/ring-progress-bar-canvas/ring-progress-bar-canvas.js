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
        console.log(newVal, oldValue,this.firstEnter);
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
    
    // 线条的结束端点样式 butt(默认) square(正方形) round(圆形)
    lineCap: {
      type: String,
      value: "butt"
    }
  },
  drawRatio: 1,
  firstEnter: 1,

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
      let {progressColor, size, progressWidth, value, baseColor} = this.properties;
      if (!valueParam) {
        valueParam = value;
      }
      if (!this.circleCanvas) {
        this.circleCanvas = wx.createCanvasContext("circleCanvas", this);
      }
      this.circleCanvas.clearRect(0, 0, Math.floor(size*this.drawRatio), Math.floor(size*this.drawRatio));
      this.circleCanvas.save()
      this.circleCanvas.translate(Math.floor(size/2*this.drawRatio), Math.floor(size/2*this.drawRatio));
      this.circleCanvas.rotate(270*Math.PI/180);
      // 如果有底边
      if (baseColor) {
        this.circleCanvas.beginPath();
        this.circleCanvas.setStrokeStyle(baseColor);
        this.circleCanvas.setLineWidth(Math.floor(progressWidth*this.drawRatio));
        this.circleCanvas.arc(0, 0, Math.floor((size/2 - progressWidth)*this.drawRatio), 0, Math.PI * 2, false);
        this.circleCanvas.stroke();
      }
      this.circleCanvas.beginPath();
      this.circleCanvas.setStrokeStyle(progressColor);
      this.circleCanvas.setLineWidth(Math.floor(progressWidth*this.drawRatio));
      this.circleCanvas.arc(0, 0, Math.floor((size/2 - progressWidth)*this.drawRatio), 0, Math.PI * 2 * valueParam, false);
      this.circleCanvas.stroke();
      this.circleCanvas.draw();
      this.circleCanvas.restore()
    }
  }
})
