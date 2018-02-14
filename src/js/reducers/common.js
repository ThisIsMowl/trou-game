import keyTypes from '../keyTypes'

const defaultState = {
  loaded: false,
  boardState: [
    [1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 2, 1],
  ],
}

const common = (state = defaultState, action) => {
  switch (action.type) {
    case keyTypes.APP_LOADED:
      return {
        ...state,
        loaded: true,
      }
    default:
      return state
  }
}

export default common
