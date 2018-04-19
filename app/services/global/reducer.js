

import {
  GLOBAL_WELCOME_HAS_SHOW,
  GLOBAL_INITIAL,
  GLOBAL_VERSION_UPDATE,
  GLOBAL_VERSION_UPDATE_FINISH
} from './action/types'

const initialState = {
  version: '1.0',
  firstLoading: true,
  needUpdate: false,
  updatedTime: 0
}


export default function global(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case GLOBAL_WELCOME_HAS_SHOW:
      newState.firstLoading = false
      return newState

    case GLOBAL_INITIAL:
      return initialState

    case GLOBAL_VERSION_UPDATE:
      newState.needUpdate = true
      return newState

    case GLOBAL_VERSION_UPDATE_FINISH:
      newState.needUpdate = false
      newState.updatedTime = new Date().getTime()
      return newState

    default:
      return state
  }
}