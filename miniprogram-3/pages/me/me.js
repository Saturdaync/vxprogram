// pages/me/me.js
Page({
  data: {
    avatarUrl: "/imgs/avatar.webp", // 默认头像
    nickname: "",
    showModal: false
  },
  chooseAvatar() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'], // 相册 + 拍照
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath
        this.setData({
          avatarUrl: tempFilePath
        })
      }
    })
  },
  onNickInput(e) {
    this.setData({
      nickname: e.detail.value
    })
  },
  click() {
    this.setData({
      showModal: !this.data.showModal
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})