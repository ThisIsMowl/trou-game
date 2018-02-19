import React from 'react'

import PieceHolder from './../gamePieces/PieceHolder'

const PlayingRow = props => (
  <div className="board-row">
    <PieceHolder noBorder inPlay={props.inPlay} />
    <PieceHolder noBorder inPlay={props.inPlay} />
    <PieceHolder noBorder inPlay={props.inPlay} />
    <PieceHolder noBorder inPlay={props.inPlay} />
    <PieceHolder noBorder inPlay={props.inPlay} />
    <PieceHolder noBorder inPlay={props.inPlay} />
    <PieceHolder noBorder inPlay={props.inPlay} />
  </div>
)

export default PlayingRow
