import React from 'react'
import { connect } from 'react-redux'

import common from '../actions/common'

const mapDispatch = dispatch => ({
  restartGame: () =>
    dispatch(common.restartGame()),
})

class RestartButton extends React.Component {
  constructor() {
    super()
    this.restartGame = (e) => {
      e.preventDefault()
      this.props.restartGame()
    }
  }

  render() {
    return (
      <button type="button" onClick={this.restartGame}>Restart</button>
    )
  }
}

export default connect(() => ({}), mapDispatch)(RestartButton)
