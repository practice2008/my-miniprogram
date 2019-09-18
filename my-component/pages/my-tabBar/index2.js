Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        text: "对话",//文本内容
        iconPath: "/images/tabbar/basics.png",//选择前的位置
        urlPath: "/index/index",//跳转路径
        selectedIconPath: "/images/tabbar/basics_cur.png",//选择后的位置
        badge: '新'
      },
      {
        text: "设置",
        iconPath: "/images/tabbar/component.png",
        urlPath: "/index/index2",
        selectedIconPath: "/images/tabbar/component_cur.png",
        badge: 'New'
      },
      {
        text: "其他",
        iconPath: "/images/tabbar/plugin.png",
        urlPath: "/index/index3",
        selectedIconPath: "/images/tabbar/plugin_cur.png",
        badge: '99+'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  tabChangeE: function(eve) {
    console.log(eve);
    console.log(eve.detail);

  }

})