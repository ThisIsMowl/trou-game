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
    // bugfix to make sure next piece can be dropped in same column as last one
    case keyTypes.DROP_COUNTER:
      return {
        ...state,
        targetField: state.targetField[1] !== -1 ? [state.targetField[0], state.targetField[1] - 1] : state.targetField,
      }
    default:
      return state
  }
}

export default gameplayReducer
