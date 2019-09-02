Component({

  data: {
    isShow: true
  },
  /**
   * 组件的方法列表
   */
  methods: {

    show: function () {      
      if (!this.data.isShow) {
        this.setData({
          isShow: true
        });
      }
    },

    hide: function () {
      if (this.data.isShow) {
        this.setData({
          isShow: false
        });
      }
    },

    // 如想事件穿透可以外层加css pointer-events: none;或者通过绑定handClick监听手势被点
    handTipsClick: function() {
      this.triggerEvent("handClick");
    }

  }
})
