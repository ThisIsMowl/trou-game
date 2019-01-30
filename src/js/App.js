import React from 'react'
import { connect } from 'react-redux'
import Hotkeys from 'react-hot-keys'

import common from './actions/common'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css'

import GameplayContainer from './components/GameplayContainer'
import Header from './components/Header'

const mapState = state => ({
  targetColumn: state.gameplayReducer.targetColumn,
  targetField: state.gameplayReducer.targetField,
  boardState: state.common.boardState,
  gameActive: state.common.gameActive,
})

const mapDispatch = dispatch => ({
  restartGame: () =>
    dispatch(common.restartGame()),
  changeTargetColumn: (column, payload) =>
    dispatch(common.changeTargetColumn(column, payload)),
  dropCounter: (x, y) =>
    dispatch(common.dropCounter(x, y)),
})

class App extends React.Component {

  constructor() {
    super()
    this.restartGame = () => {
      this.props.restartGame()
    }

    this.changeTargetColumn = (column, payload, gameActive) => {
      if (gameActive) return this.props.changeTargetColumn(column, payload)
      return null
    }
    this.dropCounter = (x, y, gameActive) => {
      if (gameActive) return this.props.dropCounter(x, y)
      return null
    }
  }

  handleCounterDrop(x) {
    this.changeTargetColumn(this.props.boardState[x-1], x-1, this.props.gameActive)
    this.dropCounter(this.props.targetField[0], this.props.targetField[1], this.props.gameActive)
  }

  onKeyDown(keyName, e, handler) {
    e.preventDefault()
    let keyEnd = keyName.slice((keyName.length) - 1)

    if (parseInt(keyEnd, 10)) {
      this.handleCounterDrop(keyEnd)
    } else if (keyEnd === "a") {
      this.restartGame()
    }
  }


  render() {
    return (
      <Hotkeys
        keyName="
        ctrl+a,
        command+a,
        1,
        2,
        3,
        4,
        5,
        6,
        7
        "
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

export default connect(mapState, mapDispatch)(App)
