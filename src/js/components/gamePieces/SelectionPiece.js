import React from 'react'
import { connect } from 'react-redux'

import common from '../../actions/common'

const mapState = state => ({
  targetColumn: state.gameplayReducer.targetColumn,
  boardState: state.common.boardState,
})

const mapDispatch = dispatch => ({
  changeTargetColumn: (column, payload) =>
    dispatch(common.changeTargetColumn(column, payload)),
})

class SelectionPiece extends React.Component {

  constructor() {
    super()
    this.changeTargetColumn = (column, payload) => this.props.changeTargetColumn(column, payload)
  }

  render() {
    const activePlayerClass = this.props.activePlayer ? `game-piece--player${this.props.activePlayer}` : ''

    const classestoAdd = (this.props.targetColumn === this.props.id) ? activePlayerClass : 'selection-piece'

    const className = `game-piece ${classestoAdd}`

    const {
      id,
      boardState,
    } = this.props

    return (
      <div className={className} onMouseOver={() => this.changeTargetColumn(boardState[id], id)} />
    )
  }
}

export default connect(mapState, mapDispatch)(SelectionPiece)
