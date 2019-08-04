//index.js
//获取应用实例
const app = getApp()
var picname = ["梵高","喜羊羊","大头猪"]
var bgColors = ['#a8a8a8', '#8b7355', "#4d4d4d"]

Page(
  {
  data: {
    styles: ['/static/style_imgs/img1.jpg', '/static/style_imgs/img2.jpg', '/static/style_imgs/img3.jpg'],
    current_picname: picname[0],
    indicatorDots: false,
    autoplay: false,
    interval: 1000,
    duration: 500,
    swpMargin: "100rpx",
    circular: true,
    swipper_index: 0,
    label:0,
    isVertial: true,
    bgColor: '#a8a8a8',
    list: [{
      pagePath: "",
      iconPath: "",
      selectedIconPath: "",
      text: "啊"
    }, {
      pagePath: "",
      iconPath: "",
      selectedIconPath: "",
      text: "接口"
    }]
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1,
          color: "#000000",
        })
      }
    }
  }, 
  onSlideChangeEnd: function (e) {
    var that = this;
    that.setData({
      swipper_index: e.detail.current+1,
      bgColor: bgColors[e.detail.current],
      current_picname: picname[e.detail.current],
      textclass:"text text-transition"
    });   
  },
  confirm: function(e){
    console.log(this.data.swipper_index)
    this.setData({
      label: this.data.swipper_index
    })
    // 把this.data.label传给后端
    // wx.request({
    //   url: 'http://localhost:8080/style',
    //   data:{
    //     "style":this.data.label
    //   },
    //   success(res) {
    //     // 路由到下一个页面
    //     wx.redirectTo({
    //       url: '../camera/camera',
    //     })
    //   } 
    // })
      wx.navigateTo({
        url: '../camera/camera',
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: this.data.label })
        }
      })
  },
  pageLifetimes: {
    show() {
      console.log(this.getTabBar)
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
  
})
