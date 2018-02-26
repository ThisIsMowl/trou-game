import keyTypes from '../keyTypes'

const defaultState = {
  loaded: false,
  boardState: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 2, 2],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 2, 2, 2, 2],
    [0, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2],
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
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
        boardState: action.payload ? action.payload : state.boardState,
      }
    default:
      return state
  }
}

export default common
