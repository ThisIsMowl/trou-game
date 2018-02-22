import keyTypes from '../keyTypes'

const defaultState = {
  currentPiece: 0,
  highlightedField: [0,0]
}

const gameplayReducer = (state = defaultState, action) => {
  switch (action.type) {
    case keyTypes.CHANGE_CURRENT_ACTIVE_PIECE:
      return {
        ...state,
        currentPiece: action.payload,
      }
    case keyTypes.CHANGE_HIGHLIGHTED_FIELD:
      return {
        ...state,
        highlightedField: [action.x, action.y],
      }
    default:
      return state
  }
}

export default gameplayReducer
