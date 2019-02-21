import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <nav style={navStyle}>
        <Link style={navItemStyle} to="/">Home</Link>|
        <Link style={navItemStyle} to="/about">About</Link>|
        <Link style={navItemStyle} to="/dashboard">Dashboard</Link>
      </nav>
    )
  }
}

const navStyle = {
  display: 'table',
  margin: '0 auto',
  borderRadius: '0 0 5px 5px',
  background: '#ccc'
}

const navItemStyle = {
  display: 'inline-block',
  textDecoration: 'none',
  color: '#333',
  // margin: '0 15px',
  padding: '15px'
}

export default NavBar
