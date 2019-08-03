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
        });
        wx.chooseImage({
          success: function (res) {
            var tempFilePaths = res.tempFilePaths
            wx.uploadFile({
              url: 'http://localhost:8080/content', //仅为示例，非真实的接口地址
              filePath: tempFilePaths[0],
              name: "file",
              success: function (res) {
                  console.log(res)
                //do something
              }
            })
          }
        })
        
             
            // wx.setStorage({
            //   key: 'result',
            //   data: res,
            //   success: function(res){
            //     wx.navigateTo({
            //       url: '../result/result?final_result='+res
            //     })
            //   },
            //   fail: function(){
            //     // fail
            //   }
            // })
          },
          fail: function(){
            //fail  
            console.log("fail")
          }
        })
        wx.redirectTo({
          url: '../result/result',
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