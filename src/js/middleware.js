import keyTypes from './keyTypes'
import common from './actions/common'

// Function which checks if there is a win state.
const checkWinState = (gameBoard, playerNo) => {
  let count = 0
  // Check horizontally

  for (let i = 0; i < 7; i += 1) {
    for (let j = 0; j < 6; j += 1) {
      count = (gameBoard[i][j] === playerNo) ? count + 1 : 0
      if (count === 4) return true
    }
  }

  // Check vertically
  for (let j = 0; j < 6; j += 1) {
    for (let i = 0; i < 7; i += 1) {
      count = (gameBoard[i][j] === playerNo) ? count + 1 : 0
      if (count === 4) return true
    }
  }

  // Check diagonally
  // Part 1: Bottom lines

  for (let rowStart = 0; rowStart < (6 - 4); rowStart += 1) {
    for (let row = rowStart, col = 0; row < 6 && col < 7; row += 1, col += 1) {
      count = (gameBoard[col][row] === playerNo) ? count + 1 : 0
      if (count === 4) return true
    }
  }

  // Part 2: Top lines

  for (let colStart = 1; colStart < (7 - 4); colStart += 1) {
    for (let row = 0, col = colStart; row < 6 && col < 7; row += 1, col += 1) {
      count = (gameBoard[col][row] === playerNo) ? count + 1 : 0
      if (count === 4) return true
    }
  }

  return false
}

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

      // Check if there is a winner
      action.winner = checkWinState(boardState, currentPlayer)

      if (!action.winner) {
        // Change player
        store.dispatch(common.changePlayer())
      }
    }
  }
  next(action)
}

export default {
  boardCheck,
  dropCounterMiddleware,
}
