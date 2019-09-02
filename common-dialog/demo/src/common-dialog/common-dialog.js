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
    // 是否点击蒙层也要关闭弹窗
    isMaskClose: {
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
    tips: '这里是弹窗内容'
  },

  ready: function () {
    this._baseDialog = this.selectComponent("#baseDialog");
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 动态修改关闭按钮是否显示
    setShowClose:function(show){
      this.setData({
        showClose: show
      });
    },

    // 动态修改关闭按钮文字
    setShowCloseText:function(text){
      this.setData({
        btnCloseText: text
      });
    },

    //  查看当前弹窗是否显示
    isShow: function() {
      return this._baseDialog.isShow();
    },

    // 显示弹窗
    show: function (tips) {
      // 通过传入不同参数可以修改弹窗内弹窗的内容，此处自由发挥
      if (tips) {
        this.setData({
          tips: tips
        })
      }
      this._baseDialog.showDialog();
    },

    // 关闭弹窗
    hide: function () {
      let isShow = this._baseDialog.isShow();
      if (!isShow) {
        return;
      }
      this._baseDialog.hideDialog();
    },

    // 点击关闭按钮向外传递的事件
    _onDialogClose: function(e) {
      // 对于一些点击关闭还想做一些判断再关闭的可以在这里做
      this._baseDialog.hideDialog();
      this.triggerEvent('dialogClose', e);
    }, 

    // 点击蒙版向外传递的事件
    _onMaskTap: function(e) {
      // 点击蒙版也要关闭弹窗
      if(this.properties.isMaskClose) {
        this._baseDialog.hideDialog();
      }
      this.triggerEvent('touchMask', e);
    }
  }
})
