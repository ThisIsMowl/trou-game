import keyTypes from '../keyTypes'

const appLoaded = () => ({
  type: keyTypes.APP_LOADED,
})

const changeActivePiece = (column, payload) => ({
  type: keyTypes.CHANGE_CURRENT_ACTIVE_PIECE,
  column,
  payload,
})

export default {
  appLoaded,
  changeActivePiece,
}
