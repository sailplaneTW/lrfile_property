import {
  GLOBAL_WELCOME_HAS_SHOW,
  GLOBAL_INITIAL,
  GLOBAL_VERSION_UPDATE,
  GLOBAL_VERSION_UPDATE_FINISH
} from './types'

const finishFirstLoading = () => ({
  type: GLOBAL_WELCOME_HAS_SHOW,
})

const initialFirstLoading = () => ({
  type: GLOBAL_INITIAL
})

const globalVersionUpdate = () => {
  console.log('execute globalVersionUpdate')
  return {
    type: GLOBAL_VERSION_UPDATE,
  }
}

const globalVersionUpdateFinish = () => ({
  type: GLOBAL_VERSION_UPDATE_FINISH,
})

export {
  finishFirstLoading,
  initialFirstLoading,
  globalVersionUpdate,
  globalVersionUpdateFinish,
}
