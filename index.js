

/////////////////////假设我们生成一万个这样的数组，如果结果是正确的，那么1至10，每个数在数组的第一个位置出现的概率是一样的

var d_1 = 0; var d_2 = 0; var d_3 = 0; var d_4 = 0; var d_5 = 0; var d_6 = 0; var d_7 = 0; var d_8 = 0; var d_9 = 0; var d_10 = 0;
var a,i,j,k,b,c,d,
 rand_num=new Array;
for (c = 0; c < 2000; c++) { 
  rand_num=[];
   a = Math.ceil(Math.random() * 10);
console.log('最原始的a' + a)
rand_num[0]=a;
a = Math.ceil(Math.random() * 10);
console.log('第一这里的a' + a)
console.log('数组的长度' + rand_num.length)
///////////////////////////////////////////////

for (;rand_num.length<10;)
{for(i=0;i<rand_num.length;i++)
{ if(rand_num[i]==a) 
{ a = Math.ceil(Math.random() * 10); i = -1; console.log('第二这里的a'+a)}  
  
 else {}
 }
rand_num[rand_num.length]=a;
  console.log('增加了的数组的长度' + rand_num.length)
  console.log('增加了之后的数组是' + rand_num);
  if (rand_num.length == 10) { 
    switch(rand_num[9])
    {
      case 1:
      d_1=d_1+1
      break;
      case 2:
        d_2 = d_2 + 1
        break;
      case 3:
        d_3 = d_3 + 1
        break;
      case 4:
        d_4 = d_4 + 1
        break;
      case 5:
        d_5 = d_5 + 1
        break;
      case 6:
        d_6 = d_6 + 1
        break;
      case 7:
        d_7 = d_7 + 1
        break;
      case 8:
        d_8= d_8 + 1
        break;
      case 9:
        d_9 = d_9 + 1
        break;
      case 10:
        d_10 = d_10 + 1
        break;
    }
    
  console.log('最后一个数是' + rand_num[9])}
  a = Math.ceil(Math.random() * 10);
  console.log('第三这里的a' + a)
}
/*else if(rand_num.length==10){
  console.log('整个的数组' + rand_num);
  rand_num=[]
 
}
  */
}
console.log('最后一个数是1的概率'+d_1+'');
console.log('最后一个数是2的概率' + d_2 + '');
console.log('最后一个数是3的概率' + d_3 + '');
console.log('最后一个数是4的概率' + d_4 + '');
console.log('最后一个数是5的概率' + d_5 + '');
console.log('最后一个数是6的概率' + d_6 + '');
console.log('最后一个数是7的概率' + d_7 + '');
console.log('最后一个数是8的概率' + d_8 + '');
console.log('最后一个数是2的概率' + d_9 + ''); 
console.log('最后一个数是2的概率' + d_10 + '');


//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  beginAnswer: function () {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
