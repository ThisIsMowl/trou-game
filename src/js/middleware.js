import keyTypes from './keyTypes'
import common from './actions/common'

const boardCheck = store => next => (action) => {
  if (action.type === keyTypes.CHANGE_TARGET_COLUMN) {
    const blankIndex = action.column.lastIndexOf(0)
    store.dispatch(common.changeTargetField(action.payload, blankIndex))
  }
  next(action)
}

export default {
  boardCheck,
}
