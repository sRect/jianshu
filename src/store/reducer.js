import { combineReducers } from 'redux'
import { headerState } from './state'
import * as types from './actionTypes'

const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case types.GETHEADER_INPUT_VAL:
      return state;
    case types.GETHEADER_INPUT_FOCUSED:
      return state;
    default:
      return state;
  }
}

const allReducer = {
  headerReducer
}

const rootReducer = combineReducers(allReducer)

export default rootReducer