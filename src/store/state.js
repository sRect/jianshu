import { fromJS } from 'immutable'

export const headerState = fromJS({
  inputVal: '',
  foucused: false,
  mouseIn: false,
  searchInfoList: [],
  currentPage: 1,
  totalPage: 1,
  pageSize: 10
})

export const topicState = fromJS({
  topicList: [{
    id: 1,
    title: '简书电影',
    imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '摄影',
    imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 3,
    title: '读书',
    imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }]
})

export const listState = fromJS({
  articleList: [{
    id: 1,
    title: '有那种网站吗，嗯？分享5个好用的在线工具！',
    desc: '工作中，我们常常有一些很小需求，比如传图的时候图片太大，需要压缩一下。 而往往专业的工具动辄几百M，下载安装仅仅是用其中的一个小功能，实在不值得...',
    imgUrl: '//upload-images.jianshu.io/upload_images/9807853-11fe67ba82dc2ed9.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 2,
    title: '一群90后小姐姐的大理旅拍一日游，这才是大理旅拍的正确打开方式',
    desc: '6月底，由于我们公司业绩很好，为了奖励我们这些优秀的员工，决定组织我们云南大理游玩，作为奖励，由于本次出行的有情侣，有单身妹子，所以公司老总决定...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4952818-179a5639d0a8c9bd.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 3,
    title: '邓文迪这么会撩汉，只因做到了这4点！',
    desc: '公众号：优爱学院 邓文迪这么会撩汉，只因做到了这4点！ 文|院长 对于媒体而言，邓文迪有着百慕大一样的磁力：她是一个人人都想解开的谜。 这个出身...',
    imgUrl: '//upload-images.jianshu.io/upload_images/11594709-3d0763c6be331793?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }]
})