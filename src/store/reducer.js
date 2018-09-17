import { combineReducers } from 'redux-immutable'
import { headerState, topicState, listState, recommendState } from './state'
import * as types from './actionTypes'

// Header
const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case types.GETHEADER_INPUT_VAL:
      return state;
    case types.GETHEADER_INPUT_FOCUSED:
      return state;
    case types.HANDLE_INPUT_CHANGE:
      // let newState = JSON.parse(JSON.stringify(state));
      // newState.inputVal = action.val;
      // return { ...newState }
      return state.set("inputVal", action.val)
    case types.HANDLE_INPUT_FOCUS:
      // let newState2 = JSON.parse(JSON.stringify(state));
      // newState2.foucused = true;
      // return { ...newState2 }
      return state.set("foucused", true)
    case types.HANDLE_INPUT_BLUR:
      // let newState3 = JSON.parse(JSON.stringify(state));
      // newState3.foucused = false;
      // return { ...newState3 }
      return state.set("foucused", false)
    case types.HANDLE_INPUT_GETLIST:
      // return state.set("searchInfoList", action.searchInfoList).set("totalPage", action.totalPage)
      // 多个set,可以使用merge方法
      return state.merge({
        searchInfoList: action.searchInfoList,
        totalPage: action.totalPage
      })
    case types.CHANGE_MOUSEIN:
      return state.set("mouseIn", action.arg)
    case types.HANDLE_CHANGE_LIST:
      return state.set("currentPage", action.currentPage)
    default:
      return state;
  }
}

// Topic
const topicReducer = (state = topicState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// List
const listReducer = (state = listState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// Recommend
const recommendReducer = (state = recommendState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const allReducer = {
  headerReducer,
  topicReducer,
  listReducer,
  recommendReducer
}

const rootReducer = combineReducers(allReducer)

export default rootReducer