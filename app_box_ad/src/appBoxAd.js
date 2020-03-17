
export class AppBoxAd {
  constructor(adId = null) {
    this.adId = adId;
    this.appBoxAd = null;
    this.isSupportSdkVersion = null;
    this.createAd();
  }

  createAd() {
    if (!this.isSupportBySdkVersion()) {
      return null;
    }

    if (this.adId == null) {
      return null;
    }

    try {
      if (this.appBoxAd == null && qq.createAppBox) {
        this.appBoxAd = qq.createAppBox({ adUnitId: this.adId });
        this.initListener();
      }
    } catch(err){
      console.error("广告初始化失败", err);
    }
    
    return this.appBoxAd;
  }

  initListener() {
    if (this.appBoxAd == null) {
      return;
    }

    this.appBoxAd.onClose(()=>{
      console.log("intersitialAd onClose");
    });
  }

  canShow() {
    if (!this.isSupportBySdkVersion()) {
      return false;
    }

    return true;
  }

  show() {
    this.appBoxAd.load().then(() => {
      this.appBoxAd.show().then(() => {
        console.log("盒子广告展示成功");
      },(err) => {
        console.log("盒子广告展示失败", err);
      });
    });
  }

  isSupportBySdkVersion() {
    if (this.isSupportSdkVersion == null) {
      this.isSupportSdkVersion = wx.canIUse("createAppBox")
    }

    return this.isSupportSdkVersion;
  }

}