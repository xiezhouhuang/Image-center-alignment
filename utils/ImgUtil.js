class ImgUtil {

  /*** 
   * 按照显示图片的宽等比例缩放得到显示图片的高 
   * @params originalWidth 原始图片的宽 
   * @params originalHeight 原始图片的高 
   * @params imageWidth   显示图片的宽，如果不传就使用屏幕的宽 
   * 返回图片的宽高对象 
  ***/
  static imageZoomHeightUtil(originalWidth, originalHeight, imageWidth) {
    let imageSize = {};
    if (imageWidth) {
      imageSize.imageWidth = imageWidth;
      imageSize.imageHeight = (imageWidth * originalHeight) / originalWidth;
    } else {//如果没有传imageWidth,使用屏幕的宽 
      wx.getSystemInfo({
        success: function (res) {
          imageWidth = res.windowWidth;
          imageSize.imageWidth = imageWidth;
          imageSize.imageHeight = (imageWidth * originalHeight) / originalWidth;
        }
      });
    }
    return imageSize;
  }

  /*** 
   * 按照显示图片的高等比例缩放得到显示图片的宽 
   * @params originalWidth 原始图片的宽 
   * @params originalHeight 原始图片的高 
   * @params imageHeight  显示图片的高，如果不传就使用屏幕的高 
   * 返回图片的宽高对象 
  ***/
  static imageZoomWidthUtil(originalWidth, originalHeight, imageHeight) {
    let imageSize = {};
    if (imageHeight) {
      imageSize.imageWidth = (imageHeight * originalWidth) / originalHeight;
      imageSize.imageHeight = imageHeight;
    } else {//如果没有传imageHeight,使用屏幕的高 
      wx.getSystemInfo({
        success: function (res) {
          imageHeight = res.windowHeight;
          imageSize.imageWidth = (imageHeight * originalWidth) / originalHeight;
          imageSize.imageHeight = imageHeight;
        }
      });
    }
    return imageSize;
  }

}

export default ImgUtil;