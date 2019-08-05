//index.js
//获取应用实例
const app = getApp()
var picInfo = require('../../utils/data.js'); 

Page(
  {
  data: {
    styles: "",
    title: picInfo.picInfo["title"][0],
    title_en: picInfo.picInfo["title_en"][0],
    content: picInfo.picInfo["details"][0],
    cur_img: picInfo.picInfo["url"][0],
    showModal: false, 
    single: false,
    imgUrls: picInfo.picInfo["url"],
    label:0,
  },
  nextStep: function(e){
    this.setData(
      {
        showModal: true,
      })
  },
  modalCancel(e) {
    // 这里面处理点击取消按钮业务逻辑
    console.log('点击了取消')
  },
  // 点击确定按钮的回调函数
  modalConfirm(e) {
    // 这里面处理点击确定按钮业务逻辑
    console.log('点击了确定')
  },
  onLoad: function (options) {
      console.log(this.data.imgUrls)
  },
  changeView: function(e){
    console.log(this)
    var id = e.currentTarget.dataset.index
    this.setData(
      {
        label: id,
        title: picInfo.picInfo["title"][id],
        title_en: picInfo.picInfo["title_en"][id],
        content: picInfo.picInfo["details"][id],
        cur_img: picInfo.picInfo["url"][id],
      }
    )
  },
  // pageLifetimes: {
  //   show() {
  //     if (typeof this.getTabBar === 'function' && this.getTabBar()) {
  //       this.getTabBar().setData({
  //         selected: 1,
  //         color: "#000000",
  //       })
  //     }
  //   }
  // }, 
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
