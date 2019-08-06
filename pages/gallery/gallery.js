// pages/gallery/gallery.js
var imgs_list = [
  "/static/imgs/img2.jpg",
  "/static/imgs/img5.jpg",
  "/static/imgs/img3.jpg",
  "/static/imgs/img4.jpg",
  "/static/imgs/img1.jpg",
  "/static/imgs/img6.jpg",
]

var imgs_title = [
  "我和梵高",
  "梵高和我",
  "梵高和我",
  "梵高和我",
  "梵高和我",
  "梵高和我",
]
var place = [
  true,false,false,true,false,true
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