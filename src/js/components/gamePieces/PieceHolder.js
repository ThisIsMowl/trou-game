import React from 'react'
import GamePiece from './GamePiece'

import '../../../css/gamePieces/PieceHolder.css'

const PieceHolder = (props) => {
  const className = props.top ? 'piece-holder top-row' : 'piece-holder'

  return (
    <div>
      <div className={className}>
        <GamePiece player={props.player} />
      </div>
    </div>
  )
}

export default PieceHolder
