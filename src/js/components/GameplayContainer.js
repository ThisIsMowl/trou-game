import React from 'react'
import { connect } from 'react-redux'

import GameBoard from './gamePieces/GameBoard'
import WinnerText from './WinnerText'
import RestartButton from './RestartButton'

const mapState = state => ({
  gameWinner: state.common.gameWinner,
})

const GameplayContainer = (props) => {
  const { gameWinner } = props
  return (
    <div className="gameplay">
      <GameBoard />
      <WinnerText gameWinner={gameWinner} />
      <RestartButton />
    </div>
  )
}

export default connect(mapState, () => ({}))(GameplayContainer)
