import keyTypes from './keyTypes'
import common from './actions/common'

const boardCheck = store => next => (action) => {
  if (action.type === keyTypes.CHANGE_TARGET_COLUMN) {
    const blankIndex = action.column.lastIndexOf(0)
    store.dispatch(common.changeTargetField(action.payload, blankIndex))
  }
  next(action)
}

const dropCounterMiddleware = store => next => (action) => {
  if (action.type === keyTypes.DROP_COUNTER) {
    if (action.y !== -1) {
      const { currentPlayer } = store.getState().common
      let { boardState } = store.getState().common

      boardState[action.x][action.y] = currentPlayer

      action.payload = boardState
    } else {
      action.full = true
      console.log('full')
    }
  }
  next(action)
}

export default {
  boardCheck,
  dropCounterMiddleware,
}
