import React from 'react'
import { connect } from 'react-redux'

import common from '../actions/common'
import PieceHolder from './gamePieces/PieceHolder'

const mapDispatch = dispatch => ({
  appLoad: () =>
    dispatch(common.appLoaded()),
})

class Hello extends React.Component {
  constructor() {
    super()
    this.appLoad = () => this.props.appLoad()
  }

  componentWillMount() {
    this.appLoad()
  }

  render() {
    return (
      <div>
        <PieceHolder player={1} top />
        <PieceHolder player={2} />
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatch)(Hello)
