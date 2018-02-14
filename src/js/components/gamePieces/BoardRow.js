import React from 'react'

import PieceHolder from './PieceHolder'
import '../../../css/gamePieces/BoardRow.css'

const BoardRow = (props) => {
  if (props.data) {
    if (props.top) {
      return (
        <div className="board-row">
          <PieceHolder top left player={props.data[0]} />
          <PieceHolder top player={props.data[1]} />
          <PieceHolder top player={props.data[2]} />
          <PieceHolder top player={props.data[3]} />
          <PieceHolder top player={props.data[4]} />
          <PieceHolder top player={props.data[5]} />
          <PieceHolder top player={props.data[6]} />
        </div>
      )
    }
    return (
      <div className="board-row">
        <PieceHolder left player={props.data[0]} />
        <PieceHolder player={props.data[1]} />
        <PieceHolder player={props.data[2]} />
        <PieceHolder player={props.data[3]} />
        <PieceHolder player={props.data[4]} />
        <PieceHolder player={props.data[5]} />
        <PieceHolder player={props.data[6]} />
      </div>
    )
  }
  return null
}

export default BoardRow
