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
    const { gameWinner } = this.props

    if (gameWinner) {
      return (
        <button type="button" onClick={this.restartGame}>Restart</button>
      )
    }

    return null
  }
}

export default connect(() => ({}), mapDispatch)(RestartButton)
