import React from 'react'
import { connect } from 'react-redux'

import PieceHolder from './../gamePieces/PieceHolder'
import SelectionPiece from './../gamePieces/SelectionPiece'

const mapState = state => ({
  currentPiece: state.gameplayReducer.currentPiece,
})

const PlayingRow = (props) => {
  const {
    currentPiece,
  } = props

  return (
    <div className="columns-holder">
      {[1, 1, 1, 1, 1, 1, 1].map((x, i) => (
        <PieceHolder noBorder>
          <SelectionPiece activePlayer={props.activePlayer} active={i === currentPiece} />
        </PieceHolder>
      ))}
    </div>
  )
}

export default connect(mapState, () => ({}))(PlayingRow)
