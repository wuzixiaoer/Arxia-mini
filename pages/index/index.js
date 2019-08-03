//index.js
//获取应用实例
const app = getApp()

Page(
  {
  data: {
    styles: ['/static/style_imgs/img1.jpg', '/static/style_imgs/img2.jpg', '/static/style_imgs/img3.jpg'],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    swipper_index: 0,
    label:0,
    bgColor: '#a8a8a8',
    bgColors: ['#a8a8a8','#8b7355',"#4d4d4d"],
    flag:0
  },
  onSlideChangeEnd: function (e) {
    var that = this;
    that.setData({
      swipper_index: e.detail.current+1,
      bgColor: this.data.bgColors[e.detail.current]
    });   
  },
  confirm: function(e){
    console.log(this.data.swipper_index)
    this.setData({
      label: this.data.swipper_index
    })
    // 把this.data.label传给后端
    wx.request({
      url: 'http://localhost:8080/style',
      data:{
        "style":this.data.label
      },
      success(res) {
        // 路由到下一个页面
        wx.redirectTo({
          url: '../camera/camera',
        })
      } 
    })
   
    
  }
  
})
