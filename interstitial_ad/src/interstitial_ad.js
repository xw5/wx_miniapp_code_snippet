export default class InterstitialAd {
  constructor(adId = null) {
    this.adId = adId;
    this.intersitialAd = null;
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
      if (this.intersitialAd == null) {
				if (wx.createInterstitialAd) {
					this.intersitialAd = wx.createInterstitialAd({ adUnitId: this.adId });
					this.initListener();
				}
      }
    } catch(e){
      console.error(e);
    }
    
    return this.intersitialAd;
  }

  load() {
    if (this.intersitialAd == null) {
      return;
    }
    this.intersitialAd.load(() => {
      console.log("插屏广告手动加载成功", this.adId)
    });
  }

  initListener() {
    if (this.intersitialAd == null) {
      return;
    }

    this.intersitialAd.onClose(()=>{
      console.log("intersitialAd onClose", this.adId);
    });
    this.intersitialAd.onLoad(()=>{
      console.log("intersitialAd onLoad", this.adId);
      this.show();
    });
  }

  canShow() {
    if (!this.isSupportBySdkVersion()) {
      return false;
    }
    return true;
  }

  show(callback) {
    let isCanShow = this.canShow();
    if (!isCanShow) {
      return;
    }

    this.createAd();
    if (!this.intersitialAd) {
      return;
    }
		
		this.intersitialAd.show().then(() => {
		  console.log("intersitialAd show success", this.adId);
		},
		(err)=>{
		  console.error("intersitialAd show failed 2:", err);
		}).catch((error) => {
		  console.error("intersitialAd show failed 3:", error);
		});
  }

  isSupportBySdkVersion() {
    if (this.isSupportSdkVersion == null) {
      this.isSupportSdkVersion = uni.canIUse("createInterstitialAd")
    }
    return this.isSupportSdkVersion;
  }

}