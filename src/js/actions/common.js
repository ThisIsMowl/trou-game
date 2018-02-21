import keyTypes from '../keyTypes'

const appLoaded = () => ({
  type: keyTypes.APP_LOADED,
})

const changeActivePiece = payload => ({
  type: keyTypes.CHANGE_CURRENT_ACTIVE_PIECE,
  payload,
})

export default {
  appLoaded,
  changeActivePiece,
}
