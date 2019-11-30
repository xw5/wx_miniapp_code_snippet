class RwwardVideoAd {
  rewardedVideoAd= null; // 当前激励广告对象
  isSuccess = false; // 广告是否加载成功
  rewardVideoAdId = ""; // 当前广告id
  closeCallBack = null;    // 看完广告正常关闭回调
  closeMidCallBack = null; // 未看完广告就点击了关闭
  showErrorCallBack = null; // 广告播放错误回调
  adLoadStatusBack = null;  // 广告加载状态回调，成功失败都会

  /**
   * 
   * @param {string} id 广告id
   * @param {boolean} isMultiton 是否开启广告多例模式 微信使用
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
      
      this.bindEventLoad();

      this.bindEventError();

      // 主动加载一次广告，避免首次获取不到广告状态
      this.reload();
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
    this.adLoadStatusBack && this.adLoadStatusBack(this.rewardVideoAdId, mark);
    console.log('视频广告更新：', mark, this.rewardVideoAdId);
  }

  /**
   * @param {string} id 广告id
   * @param {object} res 激励视频关闭回调
   */
  closeFn(id, res) {
    // 用户点击了【关闭广告】按钮
    // 小于 2.1.0 的基础库版本，res 是一个 undefined
    if (res && res.isEnded || res === undefined) {
      // 正常播放结束，可以下发游戏奖励
      this.closeCallBack && this.closeCallBack(this.rewardVideoAdId);
    } else {
      // 播放中途退出，不下发游戏奖励
      this.closeMidCallBack && this.closeMidCallBack(this.rewardVideoAdId);
    }
  }

  /**
   * 重新加载广告
   */
  reload() {
    this.rewardedVideoAd.load();
  }

  /**
   * 绑定load监听事件
   */
  bindEventLoad() {
    // 广告加载成功回调
    this.rewardedVideoAd.onLoad(() => {
      console.log("load是否触发成功了。。。");
      this.chagneStatus(true);
    });
  }

  /**
   * 绑定error监听事件
   */
  bindEventError() {
    // 广告加载失败回调
    this.rewardedVideoAd.onError((err) => {
      console.log("error是否触发成功了。。。");
      this.chagneStatus(false);
    });
  }

  /**
   * 绑定close监听事件
   */
  bindEventClose() {
    // 点击关闭按钮触发事件监听
    this.rewardedVideoAd.onClose((res) => {
      this.closeFn(this.rewardedVideoAd, res);
      this.removeEventClose();
    });
  }

  /**
   * 删除事件监听
   */
  removeEventLoad() {
    this.rewardedVideoAd.offLoad();
  }

  /**
   * 删除事件监听
   */
  removeEventError() {
    this.rewardedVideoAd.offError();
  }

  /**
   * 删除事件监听
   */
  removeEventClose() {
    this.rewardedVideoAd.offClose();
  }

  /** 
   * @param 播放激励视频广告
   */
  show() {
    this.bindEventClose();
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