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

export const homeState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false
})

export const detailState = fromJS({
  title: '中国地图里暗藏的天机，读完才发现之前的历史、地理统统都白学了！',
  content: '<p>关于“九州”是哪九个州，历代划分有所不同。</p><p>见于古籍的《周礼》《禹贡》《吕氏春秋》《尔雅》等就有多个版本。</p><p>这里我们不去细究九州的划分，但我们借用这个概念，将中国约略画成一个九宫格，就有了中国历史上的九大军事战略要地。</p><p>我先把这个九宫格画出来，然后再一一加以解说。</p><img src="//upload-images.jianshu.io/upload_images/11026357-2d1f894550e51471.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp" alt="img" /><p>关中、山西、河北、汉中、中原、山东、巴蜀、荆楚、江东</p><p>见于古籍的《周礼》《禹贡》《吕氏春秋》《尔雅》等就有多个版本。</p>'
})
