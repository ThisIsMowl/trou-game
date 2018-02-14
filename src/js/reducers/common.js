import keyTypes from '../keyTypes'

const defaultState = {
  loaded: false,
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
