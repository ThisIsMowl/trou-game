import keyTypes from '../keyTypes'

const defaultState = {
  targetColumn: 0,
  targetField: [0, 0],
}

const gameplayReducer = (state = defaultState, action) => {
  switch (action.type) {
    case keyTypes.CHANGE_TARGET_COLUMN:
      return {
        ...state,
        targetColumn: action.payload,
      }
    case keyTypes.CHANGE_TARGET_FIELD:
      return {
        ...state,
        targetField: [action.x, action.y],
      }
    default:
      return state
  }
}

export default gameplayReducer
