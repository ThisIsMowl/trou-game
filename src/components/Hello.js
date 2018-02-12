import React from 'react'
import { connect } from 'react-redux'

import {} from '../actions/common'

const mapDispatch = dispatch => ({
  appLoad: () =>
    dispatch()
})

class Hello extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (<h1>Hello</h1>)
  }
}

export default Hello
