import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {
    return (
      <aside style={sidebarStyle}>
        Sidebar
      </aside>
    )
  }
}

const sidebarStyle = {
    width: '300px',
    height: '500px',
    border: '1px solid #ccc',
    float: 'left'
}

export default Sidebar
