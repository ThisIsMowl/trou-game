import keyTypes from '../keyTypes'

const appLoaded = () => ({
  type: keyTypes.APP_LOADED,
})

const changePlayer = () => ({
  type: keyTypes.CHANGE_PLAYER,
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

const dropCounter = (x, y) => ({
  type: keyTypes.DROP_COUNTER,
  x,
  y,
})

export default {
  appLoaded,
  changeTargetColumn,
  changeTargetField,
  dropCounter,
  changePlayer,
}
