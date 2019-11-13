/**
 * 通用方法获取今天的日期字符串
 */
function today() {
  let date = new Date();
  return date.getFullYear().toString() + 
    ("00" + (date.getMonth() + 1).toString()).slice(-2) + 
    ("00" + date.getDate().toString()).slice(-2);
}

/**
 * 取本地存储同步版
 * @param {String} key 要获取的本地存储为key的值
 */
export function getStorageSync(key) {
  try{
    return wx.getStorageSync(key);
  } catch(e) {
    return null;
  }
}

/**
 * 存本地存储同步版
 * @param {String} key 设置本地存储的key值
 * @param {Any} params 设置本地缓存的内容
 */
export function setStorageSync(key, params) {
  try{
    wx.setStorageSync(key, params);
  } catch(e) {}
}

/**
 * 取本地存储异步Promise版
 * @param {String} key 要获取的本地存储为key的值
 */
export function getStorage(key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({
        key: key,
        success: (res) => {
          resolve(res.data);
        },
        fail: (e) => {
          resolve(e);
        }
    })
  });
}

/**
 * 存本地存储异步Promise版
 * @param {String} key 设置本地存储的key值
 * @param {Any} params 设置本地缓存的内容
 */
export function setStorage(key, params) {
  return new Promise((resolve, reject)=>{
    wx.setStorage({
        key: key,
        data: params,
        success: ()=>{
          resolve();
        },
        fail: (e)=>{
          reject(e);
        }
    });
  })
}

/**
 * 存储一个标示当天的标记变量
 * @param {String} key 存储key的本地存储,内容为当前日期如:20190902
 */
export function setStorageForToday(key) {
  try{
    wx.setStorageSync(key, today());
  } catch(e) {}
}

/**
 * 判断当前key值存储的是否是当天日期,返回true/false
 * @param {String} key 获取当前key存储的是不是今天的日期值如:20190902
 */
export function getStorageForToday(key) {
  try{
    var value = wx.getStorageSync(key);
    var todayStr = today();
    if (value && value == todayStr) {
      return true;
    } else {
      return false;
    }
  } catch(e) {
    return false
  }
}

/**
 * 
 * @param key 存储一个key的本地存储,内容为当前日期_特殊内容的值如:20190504_1
 */
export function setStorageInTodayAddValue(key, value) {
  try{
    wx.setStorageSync(key,today()+"_"+value);
  } catch(e) {
  }
}

/**
 * 
 * @param key 判断本地存储中key为testTodayKey的值,返回对象可得知是否是今天，且是否有特殊值,如{isToday: true, value: "1"}
 */
export function getStorageIsTodayAndValue(key) {
  try{
    var value = wx.getStorageSync(key);
    var tempArr = value.split("_");
    var todayStr = today();
    if (tempArr && tempArr[0] == todayStr) {
      return {
        isToday: true,
        value: tempArr[1]
      };
    } else {
      return {
        isToday: false,
        value: ""
      };
    }
  } catch(e) {
    return {
      isToday: false,
      value: ""
    };
  }
}