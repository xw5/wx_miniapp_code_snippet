class RwwardVideoAd {
  rewardedVideoAd= null; // 当前激励广告对象
  isSuccess = false; // 广告是否加载成功
  rewardVideoAdId = ""; // 当前广告id
  closeCallBack = null;    // 看完广告正常关闭回调
  closeMidCallBack = null; // 未看完广告就点击了关闭
  showErrorCallBack = null; // 广告播放错误回调
  adLoadStatusBack = null;  // 广告加载回调成功失败都会

  /**
   * 
   * @param {string} id 广告id
   * @param {boolean} isMultiton 是否开启广告多例模式
   */
  constructor(id, isMultiton) {
    this.init(id, isMultiton)
  }

  init(id, isMultiton = false) {

    this.rewardVideoAdId = id;
    if (wx.createRewardedVideoAd) {
      this.rewardedVideoAd = null;
      // 初始化一个视频广告
      this.rewardedVideoAd = wx.createRewardedVideoAd({adUnitId: this.rewardVideoAdId, multiton: isMultiton});
      // 广告加载成功回调
      this.rewardedVideoAd.onLoad(() => {
        this.chagneStatus(true);
      });

      // 广告加载失败回调
      this.rewardedVideoAd.onError((err) => {
        this.chagneStatus(false);
      });

      // 点击关闭按钮触发事件监听
      this.rewardedVideoAd.onClose((res) => {
        this.closeFn(res);
      });
      console.log("视频激励广告初始化：", this.rewardVideoAdId, this.rewardedVideoAd);
    } else {
      console.log("当前小程序版本不支持激励视频广告组件！");
    }
  }

  /**
   * 
   * @param {boolean} mark 当前广告的加载状态 true为成功 false为失败
   */
  chagneStatus(mark) {
    this.isSuccess = mark;
    this.adLoadStatusBack && this.adLoadStatusBack(mark);
    console.log('视频广告更新：', mark);
  }

  /**
   * 
   * @param {object} res 激励视频关闭回调
   */
  closeFn(res) {
    // 用户点击了【关闭广告】按钮
    // 小于 2.1.0 的基础库版本，res 是一个 undefined
    if (res && res.isEnded || res === undefined) {
      // 正常播放结束，可以下发游戏奖励
      this.closeCallBack && this.closeCallBack();
      //this.clearCallBack();
    } else {
      // 播放中途退出，不下发游戏奖励
      this.closeMidCallBack && this.closeMidCallBack();
    }
  }

  /**
   * 重新加载广告
   */
  reload() {
    this.rewardedVideoAd.load();
  }

  /**
   * 清除所有绑定的事件
   */
  clearAll() {
    this.closeCallBack = null;
    this.closeMidCallBack = null;
    this.showErrorCallBack = null;
    this.adLoadStatusBack = null;
  }

  /**
   * 清除正常关闭回调
   */
  clearCallBack() {
    this.closeCallBack = null;
  }

  /**
   * 清除未看完广告关闭回调
   */
  clearMidCallBack() {
    this.closeMidCallBack = null;
  }

  /**
   * 清除播放广告失败回调
   */
  clearErrorCallBack() {
    this.showErrorCallBack = null;
  }

  /**
   * 清除广告状态通知回调
   */
  clearAdLoadStatusBack() {
    this.adLoadStatusBack = null;
  }

  /** 
   * @param 播放激励视频广告
   */
  show() {
    this.rewardedVideoAd.show().then(() => {}).catch(() => {
      this.showErrorCallBack && this.showErrorCallBack();
      wx.showToast({
        title: '抱歉，暂无广告可用',
        icon: 'none'
      }); 
      // 重新拉取广告
      this.reload();
    });
  }
}

module.exports.RwwardVideoAd = RwwardVideoAd