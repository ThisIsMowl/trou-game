import React from 'react'
import { connect } from 'react-redux'

import common from '../actions/common'
import GameBoard from './gamePieces/GameBoard'

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
        <GameBoard />
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatch)(Hello)
