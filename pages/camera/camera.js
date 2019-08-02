Page({
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  previous: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  error(e) {
    console.log(e.detail)
  }
})