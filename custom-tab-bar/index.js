
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "index", 
      iconPath: "",
      selectedIconPath: "",
      text: "上一步"
    }, {
      pagePath: "../camera/camera",
      iconPath: "",
      selectedIconPath: "",
      text: "下一步"
    }]
  },   
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(url)
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})