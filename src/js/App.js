import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/App.css';
import GameBoard from './components/gamePieces/GameBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <GameBoard />
        </div>
      </div>
    );
  }
}

export default App;
