import keyTypes from './keyTypes'
import common from './actions/common'

const boardCheck = store => next => (action) => {
  if (action.type === keyTypes.CHANGE_CURRENT_ACTIVE_PIECE) {
    const blankIndex = action.column.lastIndexOf(0)
    store.dispatch(common.changeHighlightedField(action.payload, blankIndex))
  }
  next(action)
}

export default {
  boardCheck,
}