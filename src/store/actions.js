import * as types from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
import { headerState } from './state'

// Header
export const getInputVal = () => {
  return {
    type: types.GETHEADER_INPUT_VAL
  }
}

export const getInputFoucused = () => {
  return {
    type: types.GETHEADER_INPUT_FOCUSED
  }
}

export const handleInputChange = (val) => {
  return {
    type: types.HANDLE_INPUT_CHANGE,
    val
  }
}

export const handleInputFocus = () => {
  return {
    type: types.HANDLE_INPUT_FOCUS
  }
}

export const handleInputBlur = () => {
  return {
    type: types.HANDLE_INPUT_BLUR
  }
}

// 注意：这里searchInfoList要转为immutable对象
export const handleInputGetList = (searchInfoList) => {
  let newHeaderState = headerState.toJS();

  return {
    type: types.HANDLE_INPUT_GETLIST,
    searchInfoList: fromJS(searchInfoList),
    totalPage: Math.ceil(searchInfoList.length / newHeaderState.pageSize)
  }
}

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      let data = res.data;
      let status = data.status;

      switch (status) {
        case 'success':
          let arr = data.data;
          dispatch(handleInputGetList(arr))
          break;
        case 'failure':
          break;
        default:
          break;
      }
    }).catch(error => {
      console.log(error)
    })
  }
}

export const changeMouseIn = (arg) => {
  return {
    type: types.CHANGE_MOUSEIN,
    arg
  }
}

export const handleChangeList = (currentPage) => {
  return {
    type: types.HANDLE_CHANGE_LIST,
    currentPage
  }
}

// Home
const getHomeData = (arg) => {
  return {
    type: types.HANDLE_GET_HOME_DATA,
    arg
  }
}

export const handleGetHomeData = () => {
  return (dispatch) => {
    axios.get("/api/homeData.json").then(res => {
      let data = res.data;
      let status = data.status;

      switch (status) {
        case 'success':
          let arg = data.data;
          dispatch(getHomeData(arg));
          break;
        case 'failure':
          break;
        default:
          break;
      }
    }).catch(error => {
      console.log(error)
    })
  }
}