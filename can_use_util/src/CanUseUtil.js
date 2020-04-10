/**
 * 判断当前程序是否支持某些特性，支持特性判断和版本判断
 */
export default class CanIUseUtil {

  /**
   * 判断小程序的API，回调，参数，组件等是否在当前版本可用
   * @param {string} key ${API}.${method}.${param}.${options} 或者 ${component}.${attribute}.${option}组成的字符串
   */
  static isSupport(key) {
    if (key) {
      return wx.canIUse(key)
    } else {
      return false;
    }
  }

  /**
   * 比较当前版本是否大于传入的版本,如大于则返回1,小于则返回-1,等于则返回0
   * @param {string} version 基准版本，如你想知道当前版本是否大于1.7.1，则传入'1.7.1'即可
   */
  static compareVersion(version) {
    let nowVersion = wx.getSystemInfoSync().SDKVersion;
    let v1 = nowVersion.split('.')
    let v2 = version.split('.')
    const len = Math.max(v1.length, v2.length)
  
    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }
  
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])
  
      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
  
    return 0
  }
}