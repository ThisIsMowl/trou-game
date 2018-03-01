import React from 'react'
import { connect } from 'react-redux'

import common from '../../actions/common'

const mapState = state => ({
  targetColumn: state.gameplayReducer.targetColumn,
  targetField: state.gameplayReducer.targetField,
  boardState: state.common.boardState,
  gameActive: state.common.gameActive,
})

const mapDispatch = dispatch => ({
  changeTargetColumn: (column, payload) =>
    dispatch(common.changeTargetColumn(column, payload)),
  dropCounter: (x, y) =>
    dispatch(common.dropCounter(x, y)),
})

class SelectionPiece extends React.Component {

  constructor() {
    super()
    this.changeTargetColumn = (column, payload, gameActive) => {
      if (gameActive) return this.props.changeTargetColumn(column, payload)
      return null
    }
    this.dropCounter = (e, x, y, gameActive) => {
      e.preventDefault()
      if (gameActive) return this.props.dropCounter(x, y)
      return null
    }
  }

  render() {
    const {
      id,
      boardState,
      targetField,
      gameActive,
    } = this.props

    const activePlayerClass = this.props.activePlayer ? `game-piece--player${this.props.activePlayer}` : ''

    const classestoAdd = ((this.props.targetColumn === this.props.id) && gameActive) ? activePlayerClass : 'selection-piece'

    const className = `game-piece ${classestoAdd}`

    return (
      <div className={className} onMouseOver={() => this.changeTargetColumn(boardState[id], id, gameActive)} onClick={e => this.dropCounter(e, targetField[0], targetField[1], gameActive)} />
    )
  }
}

export default connect(mapState, mapDispatch)(SelectionPiece)
