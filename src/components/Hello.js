import React from 'react'
import { connect } from 'react-redux'

import common from '../actions/common'
import CounterHolder from './gamePieces/CounterHolder'

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
        <CounterHolder player={1} top />
        <CounterHolder player={1} />
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatch)(Hello)
