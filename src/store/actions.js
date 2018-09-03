import * as types from './actionTypes'
import axios from 'axios'

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

export const handleInputGetList = (searchInfoList) => {
  return {
    type: types.HANDLE_INPUT_GETLIST,
    searchInfoList
  }
}

export const getList = () => {
  return (dispatch) => {
    axios.get('https://www.jianshu.com/trending_search').then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
}