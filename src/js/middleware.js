import keyTypes from './keyTypes'
import common from './actions/common'


// Middleware for handling CHANGE_TARGET_COLUMN action.
const boardCheck = store => next => (action) => {
  if (action.type === keyTypes.CHANGE_TARGET_COLUMN) {
    /* find the last empty spot in the column.
    This is where our counter will land if we drop it. */
    const i = action.column.lastIndexOf(0)
    // Send our target spot to the state using the CHANGE_TARGET_FIELD action
    store.dispatch(common.changeTargetField(action.payload, i))
  }
  next(action)
}

// Middleware for handling the 'DROP_COUNTER' action
const dropCounterMiddleware = store => next => (action) => {
  if (action.type === keyTypes.DROP_COUNTER) {
    // Do not add another counter if the column is full.
    if (action.y !== -1) {
      const { currentPlayer } = store.getState().common
      let { boardState } = store.getState().common

      // Reasign blank target field with counter.
      boardState[action.x][action.y] = currentPlayer

      action.payload = boardState
    }
  }
  next(action)
}

export default {
  boardCheck,
  dropCounterMiddleware,
}
