Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      value: true
    },
    // 关闭按钮文案
    btnCloseText: {
      type: String,
      value:'点击关闭'
    },
    // 是否要对位置进行适配，当使用自定义navigation-bar的时候则需要进行位置修正，以保证弹窗在正中间
    isFixPos: {
      type: Boolean,
      value: false
    },
    // 关闭按钮文字color
    closeColor: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    titleBarHeight: 0,
    show: false
  },

  // 组件生命周期
  lifetimes:{
    ready: function() {
      if (this.properties.isFixPos) {
        let systemInfo = wx.getSystemInfoSync();
        this.setData({
          titleBarHeight:systemInfo.statusBarHeight + 88 * systemInfo.windowWidth / 750
        });
      }
    }
  },

  // 关闭的回调
  hideCallback: null,

  /**
   * 组件的方法列表
   */
  methods: {

    showDialog: function() {
      this.setData({
        show: true
      })
    },

    hideDialog: function() {
      this.setData({
        show: false
      });

      if (this.hideCallback != null){
        this.hideCallback();
      }
    },

    isShow: function() {
      return this.data.show;
    },

    _onCloseTap: function(e) {
      this.triggerEvent('dialogClose', e);
    }, 

    _onMaskTap: function(e) {
      this.triggerEvent('touchMask', e);
    },

    move: function() {
      // console.log("用来阻止事件传递");
    },

    setHideCallback:function(callback) {
      this.hideCallback = callback;
    }
  }
})