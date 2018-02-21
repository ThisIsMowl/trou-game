import React from 'react'

const SelectionPiece = (props) => {

  const activePlayerClass = (props.activePlayer && props.active) ? `game-piece--player${props.activePlayer}` : ''

  const className = `game-piece ${activePlayerClass}`

  return (
    <div className={className} />
  )
}

export default SelectionPiece
