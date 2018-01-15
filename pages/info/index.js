// pages/info/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infor:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/config/get-value',
      data: {
        key: 'info'
      },
      success: function (res) {
        if (res.data.code == 404) {
          wx.showModal({
            title: '提示',
            content: '请检查网络和后台',
            showCancel: false
          })
        } else {
          var str = res.data.data.value;
          var infor = str.split('\r\n');
          that.setData({
            infor: infor
          });

        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 // onReady: function () {
    
 // },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})