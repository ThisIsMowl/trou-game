import keyTypes from '../keyTypes'

const restartGame = () => ({
  type: keyTypes.RESTART_GAME,
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
  changeTargetColumn,
  changeTargetField,
  dropCounter,
  changePlayer,
  restartGame,
}
