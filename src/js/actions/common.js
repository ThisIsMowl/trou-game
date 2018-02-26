import keyTypes from '../keyTypes'

const appLoaded = () => ({
  type: keyTypes.APP_LOADED,
})

const changeTargetColumn = (column, payload) => ({
  type: keyTypes.CHANGE_TARGET_COLUMN,
  column,
  payload,
})

const changeTargetField = (x, y) => ({
  type: keyTypes.CHANGE_TARGET_FIELD,
  x,
  y,
})

export default {
  appLoaded,
  changeTargetColumn,
  changeTargetField,
}
