import React from 'react'

import '../../../css/gamePieces/PieceHolder.css'

const PieceHolder = (props) => {
  const top = props.top ? 'top-row' : ''
  const left = props.left ? 'left-border' : ''
  const noBorder = props.noBorder ? 'no-border' : ''
  const className = `piece-holder ${top} ${left} ${noBorder}`

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default PieceHolder
