import React from 'react'

const WinnerText = (props) => {
  return (
    <h3 className="text-center win-text">
      {
        props.gameWinner ? `Winner! Player ${props.gameWinner}` : null
      }
    </h3>
  )
}

export default WinnerText
