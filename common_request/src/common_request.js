const BASE_URL = "";// 接口共用的域名地址，可以优化url传参
/**
 * @param {String} url 请求的接口地址
 * @param {Object} data 请求的要传的参,如没有则传空
 * @param {Object} config 一些请求额外配置，详见小程序的wx.request参数，只是不需要传回调和url,data
 */
export default function commonRequest(url, data = null, config) {
  let realConfig = Object.assign({
    url: BASE_URL+url,
    data: data,
    method : "POST", 
    dataType : "json", 
    responseType : "text"
  }, config);
  return new Promise(function(resolve, reject) {
    wx.request({
      ...realConfig, 
      success: function(res) {
        console.log(`${url}请求拿到的数据:`, res);
        if (res && res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        console.log(`${url}请求失败:`, err);
        reject(err);
      }
    });
  })
}
