import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Register extends Component {
  static propTypes = {
    auth: PropTypes.func.isRequired
  }

  state = {
    register: true
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.password === this.state.repeatPassword) {
      this.props.auth(this.state)
    } else {
      alert('Wrong Password!')
    }
  }

  render() {
    return (
      <div>
        <form action="http://localhost:80/test/" method="post" onSubmit={ this.onSubmit }>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required onChange={ this.onChange } />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required onChange={ this.onChange } />
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input type="password" name="repeatPassword" id="repeatPassword" required onChange={ this.onChange } />
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Register
