import React from 'react'
import { connect } from 'react-redux'

import PieceHolder from './../gamePieces/PieceHolder'
import SelectionPiece from './../gamePieces/SelectionPiece'

import common from '../../actions/common'

const mapState = state => ({
  currentPiece: state.gameplayReducer.currentPiece,
})

const mapDispatch = dispatch => ({
  changeActivePiece: payload =>
    dispatch(common.changeActivePiece(payload)),
})

class PlayingRow extends React.Component {
  constructor() {
    super()
    
    this.changeActivePiece = payload => this.props.changeActivePiece(payload)
  }

  render() {
    const {
      currentPiece,
    } = this.props

    return (
      <div className="columns-holder">
        {[1, 1, 1, 1, 1, 1, 1].map((x, i) => (
          <PieceHolder noBorder>
            <SelectionPiece activePlayer={this.props.activePlayer} onMouseOver={() => this.changeActivePiece(i)} active={i === currentPiece} />
          </PieceHolder>
        ))}
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(PlayingRow)
