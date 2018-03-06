import React from 'react'

import PieceHolder from './../gamePieces/PieceHolder'
import SelectionPiece from './../gamePieces/SelectionPiece'


const PlayingRow = props => (
  <div className="columns-holder">
    {[1, 1, 1, 1, 1, 1, 1].map((x, i) => (
      <div className="board-column">
        <PieceHolder noBorder>
          <SelectionPiece activePlayer={props.activePlayer} id={i} />
        </PieceHolder>
      </div>
    ))}
  </div>
)

export default PlayingRow
