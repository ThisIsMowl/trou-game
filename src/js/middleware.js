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
      // Change player
      store.dispatch(common.changePlayer())
    }
  }
  next(action)
}

const checkWinState = (gameBoard, playerNo) => {
  let count = 0
  // Check horizontally

  for (let i = 0; i < 7; i++) {
    for(let j = 0; j < 6; j++) {
      count = (gameBoard[i][j] === playerNo) ? count + 1 : 0
      if (count === 4) {} //win condition
    }
  }

  // Check vertically
  for (let j = 0; j < 6; j++) {
    for(let i = 0; i < 7; i++) {
      count = (gameBoard[i][j] === playerNo) ? count + 1 : 0
      if (count === 4) {} //win condition
    }
  }

  // Check diagonally
}

export default {
  boardCheck,
  dropCounterMiddleware,
}
