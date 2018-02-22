import React from 'react'
import { connect } from 'react-redux'

import common from '../../actions/common'

const mapState = state => ({
  currentPiece: state.gameplayReducer.currentPiece,
})

const mapDispatch = dispatch => ({
  changeActivePiece: payload =>
    dispatch(common.changeActivePiece(payload)),
})

class SelectionPiece extends React.Component {

  constructor() {
    super()
    this.changeActivePiece = (payload) => this.props.changeActivePiece(payload)
  }

  render() {
    const activePlayerClass = this.props.activePlayer ? `game-piece--player${this.props.activePlayer}` : ''

    const classestoAdd = (this.props.currentPiece === this.props.id) ? activePlayerClass : 'selection-piece'

    const className = `game-piece ${classestoAdd}`

    const {
      id
    } = this.props

    return (
      <div className={className} onMouseOver={() => this.changeActivePiece(id)} />
    )
  }
}

export default connect(mapState, mapDispatch)(SelectionPiece)
