import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export class Header extends Component {
  render() {
    return (
      <header>
				<div style={ headerStyle }>
					<span style={ titlePanelStyle }>Blog</span>
					<span style={ authStyle }>
						<Link to="/login" style={ authLinkStyle }>Login</Link>
						<Link to="/register" style={ authLinkStyle }>Register</Link>
					</span>
				</div>
        <NavBar />
    	</header>
    )
  }
}

const headerStyle = {
	height: '50px',
	color: '#eee',
	background: '#333',
	position: 'relative'
}

const titlePanelStyle = {
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	fontSize: '26px'
}

const authStyle = {
	float: 'right',
	height: '50px',
	paddingTop: '15px',
	margin: '0 30px'
}

const authLinkStyle = {
	textDecoration: 'none',
	color: '#eee',
	margin: '0 15px',
}

export default Header
