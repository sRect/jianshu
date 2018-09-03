import * as types from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

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
  return {
    type: types.HANDLE_INPUT_GETLIST,
    searchInfoList: fromJS(searchInfoList)
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