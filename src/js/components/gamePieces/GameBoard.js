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
          {boardState.map((x, i) => (<BoardRow key={`row-${i}`} top={i === 0} data={x} />))}
        </div>
      )
    }
    return null
  }
}

export default connect(mapState, () => ({}))(GameBoard)
