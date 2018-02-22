import keyTypes from './keyTypes'

const boardCheck = store => next => (action) => {
  if (action.type === keyTypes.CHANGE_CURRENT_ACTIVE_PIECE) {
    const reversed = action.column.reverse()
    console.log(reversed.indexOf(0))
  }
  next(action)
}

export default {
  boardCheck,
}