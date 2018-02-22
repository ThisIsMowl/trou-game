import React from 'react'
import { connect } from 'react-redux'

import common from '../../actions/common'

const mapState = state => ({
  currentPiece: state.gameplayReducer.currentPiece,
  boardState: state.common.boardState,
})

const mapDispatch = dispatch => ({
  changeActivePiece: (column, payload) =>
    dispatch(common.changeActivePiece(column, payload)),
})

class SelectionPiece extends React.Component {

  constructor() {
    super()
    this.changeActivePiece = (column, payload) => this.props.changeActivePiece(column, payload)
  }

  render() {
    const activePlayerClass = this.props.activePlayer ? `game-piece--player${this.props.activePlayer}` : ''

    const classestoAdd = (this.props.currentPiece === this.props.id) ? activePlayerClass : 'selection-piece'

    const className = `game-piece ${classestoAdd}`

    const {
      id,
      boardState,
    } = this.props

    return (
      <div className={className} onMouseOver={() => this.changeActivePiece(boardState[id], id)} />
    )
  }
}

export default connect(mapState, mapDispatch)(SelectionPiece)
