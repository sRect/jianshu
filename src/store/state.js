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
  title: '',
  content: ''
})

export const loginState = fromJS({
  isLogin: false
})
