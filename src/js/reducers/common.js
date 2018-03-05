import keyTypes from '../keyTypes'

const blankBoard = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]

const defaultState = {
  boardState: blankBoard,
  currentPlayer: 1,
  gameActive: true,
  gameWinner: null,
}

const common = (state = defaultState, action) => {
  switch (action.type) {
    case keyTypes.DROP_COUNTER:
      return {
        ...state,
        boardState: action.payload ? action.payload : state.boardState,
        gameWinner: action.winner ? action.winner : null,
        gameActive: action.winner ? false : true,
        currentPlayer: (state.currentPlayer === 1) ? 2 : 1,
      }
    case keyTypes.RESTART_GAME:
      return {
        ...defaultState,
        boardState: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      }
    default:
      return state
  }
}

export default common
