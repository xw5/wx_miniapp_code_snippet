var CLOUD_CONFIG_URL = "你的json文件地址";

class CloudController {
  constructor() {
    this.querying = false;
    this.callbackList = [];
    this.rootData=null;
  }

  /**
   * 拉取数据
   * @param {function} callback 拉取成功后执行的回调，回调参数为拉取的json对象
   */
  loadFromCloud(callback = null) {
    if (this.querying) {
      this.callbackList.push(callback);
      return;
    }

    if (this.rootData != null ){
      this.callbackExecution(rootData);
      return;
    }

    this.callbackList.push(callback);
    this.querying=true;

    var self = this;
    wx.request({
      url: CLOUD_CONFIG_URL + "?t=" + Date.now(),

      fail: function() {
        console.error("CloudController.loadFromCloud failed");
        self.onDonwloadConfigResult(null);
      },
      success(res) {
        console.log("CloudController.loadFromCloud:res.statusCode=" + res.statusCode);
        if (res.statusCode == 200) {
          self.onDonwloadConfigResult(res.data);
        } else {
          self.onDonwloadConfigResult(null);
        }
      }
    });
  }

  onDonwloadConfigResult(data){
    this.querying= false;
    this.rootData = data;
    this.callbackExecution(data);
  }
  
  /**
   * 回调调用通知外面拉取结果，如收到的值为null则是拉取云配失败
   * @param {any} data 传给回调函数的参数，也是云配拉取到的数据
   */
  callbackExecution(data) {
    this.callbackList.forEach((item) => {
      item(data)
    });
    this.callbackList.length = 0;
  }

  /**
   * 通过key值获取云配数据，提供默认值配置
   * @param {String} key 是从云配数据取的key值
   * @param {any} defaultValue 如果获取失败或者云配上没有对应key值的数据则返回默认数值
   */
  getValue(key, defaultValue) {
    if (this.rootData == null) {
      return defaultValue;
    }

    let value = this.rootData[key] ? this.rootData[key] : undefined;

    if (value === undefined) {
      return defaultValue;
    }

    return value;
  }
}
let cloudController = new CloudController();
export default cloudController;