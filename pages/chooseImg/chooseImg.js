//index.js
//获取应用实例
const app = getApp()
var picInfo = require('../../utils/data.js'); 
var notice_list = [
  "采用全身像可以在这张画中获得最佳的表现哦!",
  "采用自拍肖像照片可以在这张画中获得最佳的表现！"
]

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
    exp_url: picInfo.picInfo["expUrls"][0],
    notice: notice_list[0],
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
      // console.log(this.data.imgUrls)
  },
  changeView: function(e){
    // console.log(this)
    var id = e.currentTarget.dataset.index
    console.log(picInfo.picInfo)
    this.setData(
      {
        label: id,
        title: picInfo.picInfo["title"][id],
        title_en: picInfo.picInfo["title_en"][id],
        content: picInfo.picInfo["details"][id],
        cur_img: picInfo.picInfo["url"][id],
        exp_url: picInfo.picInfo["expUrls"][id],
        notice: notice_list[picInfo.picInfo["notice"][id]]
      }
    )
  },
  pageLifetimes: {
    show() {
      // console.log(this.getTabBar)
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
  
})
