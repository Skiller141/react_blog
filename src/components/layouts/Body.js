import React, { Component } from 'react'
import Content from './Content'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar';

export class Body extends Component {
  constructor() {
    super()
    this.component = null
  }

  static propTypes = {
    posts: PropTypes.array,
    fullPost: PropTypes.array
  }

  render() {
    if (this.props.posts !== undefined) {
      this.component = <Content posts={this.props.posts} />
    } else if (this.props.fullPost !== undefined) {
      this.component = <Content fullPost={this.props.fullPost} />
    }
    return (
      <main style={mainStyle}>
        {this.component}
        <Sidebar />
      </main>
    )
  }
}

const mainStyle = {
    maxWidth: '1500px',
    minWidth: '400px',
    width: 'auto',
    display: 'table',
    border: '1px solid #ccc',
    padding: '15px',
    margin: '15px auto'
}

export default Body
