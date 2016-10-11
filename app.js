
App({
  globalData:{
    mimeMap: null, // [[1, 2, 3, 4, 5, 6, 8, 9], [1, 2, 3, 4, 5, 6, 8, 9], [1, 2, 3, 4, 5, 6, 8, 9]]
    count: 0,
    roomNo: 0
  },
  updateMap: function(mimeMap) { // 更新应用的数据
    this.globalData.mimeMap = mimeMap;
  },
  getMap: function() {
    return this.globalData.mimeMap;
  },
  setCount: function(count) {
    this.globalData.count = count;
  },
  decreaseCount: function() {
    if(this.globalData.count > 0) {
      this.globalData.count -= 1;
    }
  },
  getCount: function() {
    return this.globalData.count
  },
  getRoomNo: function() {
    return this.globalData.roomNo
  },
  setRoomNo: function(no) {
    this.globalData.roomNo = no;
  }
})