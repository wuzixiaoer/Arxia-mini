// pages/gallery/gallery.js
var imgs_list = [
  "http://ww4.sinaimg.cn/large/006tNc79ly1g5v1cfla5gj30nf0jd4qp.jpg",
  "http://ww4.sinaimg.cn/large/006tNc79ly1g5x6amdeehj30jg0ozte7.jpg",
  "http://ww2.sinaimg.cn/large/006tNc79ly1g5x65a383yj30ps0wowk6.jpg",
  "http://ww3.sinaimg.cn/large/006tNc79ly1g5v1qdrm2yj311e0u07wk.jpg",
  "http://ww1.sinaimg.cn/large/006tNc79ly1g5v26j82uyj31hv0u07ma.jpg",
  "http://ww2.sinaimg.cn/large/006tNc79ly1g5v1smcqz6j30zl0u0x6s.jpg",
  "http://ww2.sinaimg.cn/large/006tNc79ly1g5x6bbcyswj311y0u0afa.jpg",
  "http://ww1.sinaimg.cn/large/006tNc79ly1g5v1te0r26j30p00jg1kx.jpg",
  "http://ww2.sinaimg.cn/large/006tNc79ly1g5xtl7wdqej30pd0n2gqk.jpg",
  "http://ww4.sinaimg.cn/large/006tNc79ly1g5x6de3a4aj30hg0m8qog.jpg",
  "http://ww4.sinaimg.cn/large/006tNc79ly1g5xto7nsg6j30u011e4qq.jpg",
]

var imgs_title = [
  "埃斯塔克风景",
  "荒芜街道的两条狗",
  "阿尔勒风光",
  "普尔维尔悬崖漫步",
  "大碗岛的星期天下午",
  "挑水",
  "麦田里的收割者",
  "阿尔的卧室",
  "女人肖像",
  "呐喊",
  "头戴草帽的朱莉·马奈",
]
var place = [
  true, false, false, true, false, true,true, false,true,false
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs_list: imgs_list,
    place: place,
    imgs_title: imgs_title
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})