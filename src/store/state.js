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
  recommendList: []
})

export const topicState = fromJS({
  topicList: []
})

export const listState = fromJS({
  articleList: []
})

export const recommendState = fromJS({
  recommendList: []
})