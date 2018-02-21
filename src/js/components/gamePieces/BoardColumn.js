import React from 'react'

import PieceHolder from './PieceHolder'
import GamePiece from '../gamePieces/GamePiece'
import '../../../css/gamePieces/BoardColumn.css'

const BoardRow = (props) => {
  if (props.data) {
    return (
      <div className="board-column">
        {props.data.map((x, i) => (
          <PieceHolder key={i} top={i === 0} left={props.left}>
            <GamePiece player={x} />
          </PieceHolder>
         ))}
      </div>
    )
  }
  return null
}

export default BoardRow
