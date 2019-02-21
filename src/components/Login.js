import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Login extends Component {
  static propTypes = {
    auth: PropTypes.func.isRequired
  }

  state = {
    login: true
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.auth(this.state)
  }

  render() {
    return (
      <div>
        <div style={formStyle}>
          <h1 style={{ textAlign: 'center' }}>Login</h1>
          <form action="" method="post" onSubmit={ this.onSubmit }>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" id="email" required onChange={this.onChange} style={inputStyle} /><br /><br />
            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password" id="password" required onChange={this.onChange} style={inputStyle} /><br /><br />
            <button type="submit">Login</button><br />
          </form>
        </div>
      </div>
    )
  }
}

const formStyle = {
  border: '1px solid #ccc',
  margin: '30px auto',
  padding: '15px',
  width: '500px'
}

const inputStyle = {
  width: '300px',
  padding: '5px',
}

export default Login
