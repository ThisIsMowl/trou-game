import keyTypes from '../keyTypes'

const defaultState = {
  boardState: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  currentPlayer: 1,
  gameActive: true,
}

const common = (state = defaultState, action) => {
  switch (action.type) {
    case keyTypes.DROP_COUNTER:
      return {
        ...state,
        boardState: action.payload ? action.payload : state.boardState,
      }
    case keyTypes.CHANGE_PLAYER:
      return {
        ...state,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
      }
    default:
      return state
  }
}

export default common
