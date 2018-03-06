import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css'

import GameBoard from './components/gamePieces/GameBoard'
import WinnerText from './components/WinnerText'
import RestartButton from './components/RestartButton'

const mapState = state => ({
  gameWinner: state.common.gameWinner,
})

class App extends Component {
  render() {
    const { gameWinner } = this.props
    return (
      <div className="App">
        <div className="container">
          <GameBoard />
          <WinnerText gameWinner={gameWinner} />
          <RestartButton />
        </div>
      </div>
    );
  }
}

export default connect(mapState, () => ({}))(App)
