import React from 'react'

const WinnerText = (props) => {
  if (props.gameWinner) {
    return (
      <h4 className="text-center">Winner! Player {props.gameWinner}</h4>
    )
  }
  return null
}

export default WinnerText
