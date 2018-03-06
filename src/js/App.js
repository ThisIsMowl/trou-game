import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css'

import GameplayContainer from './components/GameplayContainer'
import Header from './components/Header'

const App = () => (
  <div className="App">
    <div className="game-holder">
      <div className="content">
        <Header />
        <GameplayContainer />
      </div>
    </div>
  </div>
)

export default App
