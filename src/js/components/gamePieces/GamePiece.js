import React from 'react'

import '../../../css/gamePieces/GamePiece.css'

const GamePiece = (props) => {
  const player = props.player ? `game-piece--player${props.player}` : ''
  const inPlay = props.inPlay ? `in-play in-play--player${props.inPlay}` : ''
  const className = `game-piece ${inPlay} ${player}`

  return (
    <div className={className} />
  )
}

export default GamePiece
