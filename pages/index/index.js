import ImgUtil from '../../utils/ImgUtil';
Page({
  data: {
    image:[
      'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1523679961&di=f5ca4a31aa67994ade7d2a556a6c881a&src=http://b3-q.mafengwo.net/s10/M00/44/54/wKgBZ1h7JMaAc8PeAAFC76SybfM74.jpeg?imageView2/2/w/600/h/600/q/90',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523690044126&di=e21c5bd583d08ccedcc57736f97e853e&imgtype=0&src=http%3A%2F%2Ffile25.mafengwo.net%2FM00%2F0A%2FAA%2FwKgB4lMC256AYLqGAAGklurKzyM52.rbook_comment.w1024.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523690044121&di=0fcc18fbc002f1715f82b1b8e9ee3abd&imgtype=0&src=http%3A%2F%2Fwww.tupperware.com.cn%2Ffileserver%2Fproduct%2F201407%2F2014-7-24_15-14-16_979_401_b.jpg'
    ],
    mariginLeft: [],
    mariginTop: [],
    imageWidth: [],
    imageHeight: [],
    screenWidth: 0,
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenWidth: res.windowWidth
        })
      }
    });
  },
  imageLoad: function (e) {
    var index = e.currentTarget.id;
    //获取图片的原始宽度和高度 
    let originalWidth = e.detail.width;
    let originalHeight = e.detail.height;
    var mariginTopSize = 0;
    var mariginLeftSize = 0;
    let imageSize = ImgUtil.imageZoomWidthUtil(originalWidth, originalHeight, 180);
    //按高度180缩放

    if (imageSize.imageWidth < this.data.screenWidth) {
      imageSize = ImgUtil.imageZoomHeightUtil(originalWidth, originalHeight, this.data.screenWidth);
      mariginTopSize = -(imageSize.imageHeight - 180) / 2;
    } else {
      mariginLeftSize = -(imageSize.imageWidth - this.data.screenWidth) / 2;
    }
    var mariginLeft = this.data.mariginLeft;
    var imageWidth = this.data.imageWidth;
    var imageHeight = this.data.imageHeight;
    var mariginTop = this.data.mariginTop;
    mariginLeft[index] = mariginLeftSize
    imageWidth[index] = imageSize.imageWidth
    imageHeight[index] = imageSize.imageHeight
    mariginTop[index] = mariginTopSize
    this.setData({
      mariginLeft: mariginLeft,
      mariginTop: mariginTop,
      imageWidth: imageWidth,
      imageHeight: imageHeight,
    });
  }
})
