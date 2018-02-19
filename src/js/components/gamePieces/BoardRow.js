import React from 'react'

import PieceHolder from './PieceHolder'
import '../../../css/gamePieces/BoardRow.css'

const BoardRow = (props) => {
  if (props.data) {
    return (
      <div className="board-row">
        {props.data.map((x, i) => (
          <PieceHolder key={i} top={props.top} left={i === 0} player={x} />
         ))}
      </div>
    )
  }
  return null
}

export default BoardRow
