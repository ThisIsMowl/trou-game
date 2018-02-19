import React from 'react'
import { connect } from 'react-redux'

import BoardRow from './BoardRow'
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

    if (boardState && boardState.length === 6) {
      return (
        <div className="game-board">
          <PlayingRow inPlay={currentPlayer} />
          {boardState.map((x, i) => (<BoardRow key={`row-${i}`} top={i === 0} data={x} />))}
        </div>
      )
    }
    return null
  }
}

export default connect(mapState, () => ({}))(GameBoard)
