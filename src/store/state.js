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