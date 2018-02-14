import React from 'react'
import { connect } from 'react-redux'

import BoardRow from './BoardRow'
import '../../../css/gamePieces/GameBoard.css'

const mapState = state => ({
  boardState: state.common.boardState,
})

class GameBoard extends React.Component {
  render() {
    const {
      boardState,
    } = this.props

    if (boardState && boardState.length === 6) {
      return (
        <div className="game-board">
          <BoardRow top data={boardState[0]} />
          <BoardRow data={boardState[1]} />
          <BoardRow data={boardState[2]} />
          <BoardRow data={boardState[3]} />
          <BoardRow data={boardState[4]} />
          <BoardRow data={boardState[5]} />
        </div>
      )
    }
    return null
  }
}

export default connect(mapState, () => ({}))(GameBoard)
