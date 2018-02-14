import React from 'react'
import Counter from './Counter'

import '../../css/gamePieces/CounterHolder.css'

const CounterHolder = (props) => {
  const className = props.top ? 'piece-holder top-row' : 'piece-holder'

  return (
    <div>
      <div className={className}>
        <Counter player={props.player} />
      </div>
    </div>
  )
}

export default CounterHolder
