// modal/modal.js
var picInfo = require('../utils/data.js'); 
var notice_list = [
  "采用全身像可以在这张画中获得最佳的表现哦!",
  "采用自拍肖像照片可以在这张画中获得最佳的表现！"
]
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是否显示modal弹窗
    show: {
      type: Boolean,
      value: false
    },
    //控制底部是一个按钮还是两个按钮，默认两个
    single: {
      type: Boolean,
      value: false
    },
    label: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    notice:"",
    expUrls:"",
    tempFilePaths: ''

  },

  attached: function (e) {
    // console.log(this.properties.label)
    var id = parseInt(this.properties.label)
    this.setData({
      notice: notice_list[picInfo.picInfo["notice"][id]],
      expUrls: picInfo.picInfo["expUrls"][id]
      }
    )
    console.log(this)
  },


  /**
   * 组件的方法列表
   */
  methods: {
    // 点击modal的回调函数
    clickMask() {
      // 点击modal背景关闭遮罩层，如果不需要注释掉即可
      this.setData({ show: false })
    },
    // 点击取消按钮的回调函数
    cancel() {
      this.setData({ show: false })
      this.triggerEvent('cancel')  //triggerEvent触发事件
    },
    // 点击确定按钮的回调函数
    chooseImage: function () {
      var _this = this;
      var style_id = parseInt(this.properties.label)
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.setData({
            tempFilePaths: res.tempFilePaths
          })
          var tempFilePath = res.tempFilePaths
          wx.uploadFile({
            url:'http://106.75.34.228:82/infer-8438a117-fbef-4184-a6e2-c6ed2d7b224f/style',
            filePath:tempFilePath[0],
            name:'content',
            header:{
              "Content-Type":"multipart/form-data"
            },
            formData:{
              'style_id':style_id
            },
            success(res){
              var ans = res.data
              wx.navigateTo({
                url:'../result/result?ans='+ans,
              })
            }
          })
        }
      })
    }
  }
})
