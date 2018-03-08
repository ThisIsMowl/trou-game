import React from 'react'
import { connect } from 'react-redux'

import common from '../actions/common'

import '../../css/RestartButton.css'

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
      <div className="text-center">
        <button type="button" className="btn btn-lg btn-primary restart-button" onClick={this.restartGame}>Restart</button>
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatch)(RestartButton)
