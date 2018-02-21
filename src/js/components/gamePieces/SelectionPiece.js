import React from 'react'

const SelectionPiece = (props) => {

  const activePlayerClass = props.activePlayer ? `game-piece--player${props.activePlayer}` : ''

  const classestoAdd = props.active ? activePlayerClass : 'selection-piece'

  const className = `game-piece ${classestoAdd}`

  return (
    <div className={className} id={props.id} />
  )
}

export default SelectionPiece
