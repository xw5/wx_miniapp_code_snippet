// pages/components/ring_progress_bar/ring_progress_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前进度
    value:{
      type: Number,
      value: 0
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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    adaptationScale:1
  },

  lifetimes:{
    attached: function() {
      let winW = wx.getSystemInfoSync().windowWidth;
      let designW = 750;
      this.setData({
        adaptationScale: winW / 750
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
