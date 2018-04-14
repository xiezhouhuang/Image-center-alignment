#
小程序图片居中显示

#### 这是小程序 image标签的mode ,对图片的缩放做的处理

1. 缩放 scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
2. 缩放 aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
3. 缩放 aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
4. 缩放 widthFix 宽度不变，高度自动变化，保持原图宽高比不变

#### 但是这里的处理无法在一个固定框里显示图片的正中间

> ### 图片完整的显示并且置于固定框内正中间

主要代码

```
let originalWidth = e.detail.width;
let originalHeight = e.detail.height;
var mariginTopSize = 0;
var mariginLeftSize = 0;
let imageSize = ImgUtil.imageZoomWidthUtil(originalWidth, originalHeight, 180);
//按高度180缩放 180像素是根据自己项目的框固定的高度
//如果图片宽度没有大于屏幕宽度
if (imageSize.imageWidth < this.data.screenWidth) {
//向上偏移
imageSize = ImgUtil.imageZoomHeightUtil(originalWidth, originalHeight, this.data.screenWidth);
mariginTopSize = -(imageSize.imageHeight - 180) / 2;
} else {
//向左偏移
mariginLeftSize = -(imageSize.imageWidth - this.data.screenWidth) / 2;
}
```


