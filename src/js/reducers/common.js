import keyTypes from '../keyTypes'

const defaultState = {
  loaded: false,
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
}

const common = (state = defaultState, action) => {
  switch (action.type) {
    case keyTypes.APP_LOADED:
      return {
        ...state,
        loaded: true,
      }
    case keyTypes.DROP_COUNTER:
      return {
        ...state,
        currentPlayer: !action.full ? (state.currentPlayer === 1 ? 2 : 1) : state.currentPlayer,
        boardState: action.payload ? action.payload : state.boardState,
      }
    default:
      return state
  }
}

export default common
