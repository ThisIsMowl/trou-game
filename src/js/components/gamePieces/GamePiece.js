import React from 'react'

import '../../../css/gamePieces/GamePiece.css'

const GamePiece = (props) => {
  const className = `game-piece game-piece--player${props.player}`

  return (
    <div className={className} />
  )
}

export default GamePiece
