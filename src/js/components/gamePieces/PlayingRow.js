import React from 'react'

import PieceHolder from './../gamePieces/PieceHolder'
import SelectionPiece from './../gamePieces/SelectionPiece'


const PlayingRow = props => (
  <div className="columns-holder">
    {[1, 1, 1, 1, 1, 1, 1].map((x, i) => (
      <PieceHolder noBorder>
        <SelectionPiece activePlayer={props.activePlayer} id={i} />
      </PieceHolder>
    ))}
  </div>
)

export default PlayingRow
