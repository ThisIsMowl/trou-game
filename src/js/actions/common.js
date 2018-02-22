import keyTypes from '../keyTypes'

const appLoaded = () => ({
  type: keyTypes.APP_LOADED,
})

const changeActivePiece = (column, payload) => ({
  type: keyTypes.CHANGE_CURRENT_ACTIVE_PIECE,
  column,
  payload,
})

const changeHighlightedField = (x, y) => ({
  type: keyTypes.CHANGE_HIGHLIGHTED_FIELD,
  x,
  y,
})

export default {
  appLoaded,
  changeActivePiece,
  changeHighlightedField,
}
