import React from 'react'

import '../../css/gamePieces/Counter.css'

const Counter = (props) => {
  const className = `counter counter--player${props.player}`

  return (
    <div className={className} />
  )
}

export default Counter
