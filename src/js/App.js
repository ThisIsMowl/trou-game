import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css'

import GameplayContainer from './components/GameplayContainer'
import Header from './components/Header'

const App = () => (
  <div className="App">
    <div className="container">
      <Header />
      <GameplayContainer />
    </div>
  </div>
)

export default App
