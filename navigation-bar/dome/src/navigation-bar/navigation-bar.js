Component({
  properties: {
    titleBgColor: { // 标题栏背景色
      type: String,
      value: "#fff"
    },
    titleColor: { // 标题栏字体颜色，默认为黑
      type: String,
      value: "#000"
    },
    backColor: { // 返回栏颜色，默认为黑
      type: String,
      value: "#000"
    },
    title: { // 标题栏内容
      type:String,
      value: ""
    },
    isShowBack: { // 是否要展示返回按钮
      type: Boolean,
      value: false
    },
    linkConfig: { // 按钮跳转配置,目前只支持小程序{appId:*,path:*,extraData:*}
      type:Object,
      value: null
    },
    isFixed: { // 标题栏是否要固定,true为固定位置，false是不固定
      type: Boolean,
      value: true
    },
    isCatchBack: { // 是否要截持back，做挽回弹窗什么的,设为true后点击返回按钮就向名触发backAction事件
      type: Boolean,
      value: false
    }
  },

  data: {
    statusBarHeight: 0,
    navBarHeight: 0,
    setTitleBgColor: '', // js设置过来的值,title背影颜色
    setTitleColor: '', // js设置过来的值,title文字颜色
    setBackColor: '' // js设置过来的值,返回键颜色
  },

  methods: {
    getHeight: function() {
      return this.data.navBarHeight
    },
    setTitleBgColor: function(color) {
      this.setData({
        setTitleBgColor: color
      });
    },
    setTitleColor: function(color) {
      this.setData({
        setTitleColor: color
      });
    },
    setBackColor: function(color) {
      this.setData({
        setBackColor: color
      });
    },
    backAction: function(e) {
      let self = this;
      let {linkConfig, isCatchBack} = this.properties;
      if (isCatchBack) {
        this.triggerEvent("backAction", linkConfig ? linkConfig : null);
      } else {
        if (linkConfig && linkConfig.appId) {
          this.triggerEvent("startNavigate");
          wx.navigateToMiniProgram({
            appId: linkConfig.appId,
            path: linkConfig.path ? linkConfig.path : '',
            extraData: linkConfig.extraData ? linkConfig.extraData : '',
            envVersion: "release",
            success: function() {
              self.triggerEvent("navigateOk");
            },
            fail: function() {
              self.triggerEvent("navigateFail");
            }
          });
        } else {
          wx.navigateBack();
        }
      }
    }
  },

  lifetimes: {
    attached: function() {
      var systemInfo = wx.getSystemInfoSync();
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight,
        navBarHeight: systemInfo.statusBarHeight + systemInfo.screenWidth * 88 / 750
      });
      console.log("当前系统信息!",systemInfo);
    }
  }
})
