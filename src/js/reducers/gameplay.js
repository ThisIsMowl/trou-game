import keyTypes from '../keyTypes'

const defaultState = {
  currentPiece: 0,
}

const gameplayReducer = (state = defaultState, action) => {
  switch (action.type) {
    case keyTypes.CHANGE_CURRENT_ACTIVE_PIECE:
      return {
        ...state,
        currentPiece: action.payload,
      }
    default:
      return state
  }
}

export default gameplayReducer
