import React from 'react'
import { connect } from 'react-redux'

import common from '../../actions/common'

const mapState = state => ({
  targetColumn: state.gameplayReducer.targetColumn,
  targetField: state.gameplayReducer.targetField,
  boardState: state.common.boardState,
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
    this.changeTargetColumn = (column, payload) => this.props.changeTargetColumn(column, payload)
    this.dropCounter = (e, x, y) => {
      e.preventDefault()
      this.props.dropCounter(x, y)
    }
  }

  render() {
    const {
      id,
      boardState,
      targetField,
    } = this.props

    const activePlayerClass = this.props.activePlayer ? `game-piece--player${this.props.activePlayer}` : ''

    const classestoAdd = (this.props.targetColumn === this.props.id) ? activePlayerClass : 'selection-piece'

    const className = `game-piece ${classestoAdd}`

    return (
      <div className={className} onMouseOver={() => this.changeTargetColumn(boardState[id], id)} onClick={e => this.dropCounter(e, targetField[0], targetField[1])} />
    )
  }
}

export default connect(mapState, mapDispatch)(SelectionPiece)
