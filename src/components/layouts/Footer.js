import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div style={footerStyle}>
        Footer
      </div>
    )
  }
}

const footerStyle = {
    background: '#333',
    color: '#eee',
    height: '200px'
}

export default Footer
