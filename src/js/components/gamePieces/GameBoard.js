import React from 'react'
import { connect } from 'react-redux'

import BoardColumn from './BoardColumn'
import PlayingRow from './PlayingRow'
import '../../../css/gamePieces/GameBoard.css'

const mapState = state => ({
  boardState: state.common.boardState,
  currentPlayer: state.common.currentPlayer,
})

class GameBoard extends React.Component {
  render() {
    const {
      boardState,
      currentPlayer,
    } = this.props

    if (boardState && boardState.length === 7) {
      return (
        <div className="game-board">
          <PlayingRow activePlayer={currentPlayer} />
          <div className="columns-holder">
            {boardState.map((x, i) => (<BoardColumn key={`column-${i}`} left={i === 0} data={x} />))}
          </div>
        </div>
      )
    }
    return null
  }
}

export default connect(mapState, () => ({}))(GameBoard)
