Page({
  data:{
    oriImg:"",
    img:"",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      oriImg:options.ans,
      img:'data:image/png;base64,'+options.ans
    })
  },
  _save: function (e) {
    console.log("here!")
    var imgSrc = this.data.oriImg;//base64编码
    const buffer = wx.base64ToArrayBuffer(imgSrc);
    var save = wx.getFileSystemManager();
    var number = Math.random();
    save.writeFile({
      filePath: wx.env.USER_DATA_PATH + '/pic' + number + '.png',
      data: buffer,
      encoding: 'binary',
      success: res => {
        wx.saveImageToPhotosAlbum({
          filePath: wx.env.USER_DATA_PATH + '/pic' + number + '.png',
          success: function (res) {
            wx.showToast({
              title: '保存成功',
            })
          },
          fail: function (err) {
            console.log(err)
          }
        })
        console.log(res)
      }, fail: err => {
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

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
    
  },

  /**
   * 保存图像
   */
  save: function(){//TODO
    wx.saveFile({
      tempFilePath: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})