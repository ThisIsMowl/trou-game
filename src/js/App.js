import React from 'react'
import { connect } from 'react-redux'
import Hotkeys from 'react-hot-keys'

import common from './actions/common'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css'

import GameplayContainer from './components/GameplayContainer'
import Header from './components/Header'

const mapDispatch = dispatch => ({
  restartGame: () =>
    dispatch(common.restartGame()),
})

class App extends React.Component {

  constructor() {
    super()
    this.restartGame = () => {
      this.props.restartGame()
    }
  }

  onKeyDown(keyName, e, handle) {
    e.preventDefault()
    this.restartGame()
  }


  render() {
    return (
      <Hotkeys
        keyName="ctrl+a,command+a"
        onKeyDown={this.onKeyDown.bind(this)}
      >
        <div className="App">
          <div className="game-holder">
            <div className="content">
              <Header />
              <GameplayContainer />
            </div>
          </div>
        </div>
      </Hotkeys>
    )
  }
}

export default connect(() => ({}), mapDispatch)(App)
