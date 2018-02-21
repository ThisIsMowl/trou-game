import React from 'react'

import '../../../css/gamePieces/GamePiece.css'

const GamePiece = (props) => {
  const player = props.player ? `game-piece--player${props.player}` : ''
  const className = `game-piece ${player}`

  return (
    <div className={className} />
  )
}

export default GamePiece
