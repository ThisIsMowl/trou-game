import React from 'react'
import GamePiece from './GamePiece'

import '../../../css/gamePieces/PieceHolder.css'

const PieceHolder = (props) => {
  const top = props.top ? 'top-row' : ''
  const left = props.left ? 'left-border' : ''
  const noBorder = props.noBorder ? 'no-border' : ''
  const className = `piece-holder ${top} ${left} ${noBorder}`

  return (
    <div>
      <div className={className}>
        <GamePiece player={props.player} inPlay={props.inPlay} />
      </div>
    </div>
  )
}

export default PieceHolder
