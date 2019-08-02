const app = getApp()
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
        wx.request({
          url: 'http://106.75.34.228:82/infer-8438a117-fbef-4184-a6e2-c6ed2d7b224f/',
          data:{ //json格式数据

          },
          success: function(res){//得到结果图像传给result页面
            wx.setStorage({
              key: 'result',
              data: res,
              success: function(res){
                wx.navigateTo({
                  url: '../result/result?final_result='+res
                })
              },
              fail: function(){
                // fail
              }
            })
          },
          fail: function(){
            //fail  
          }
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