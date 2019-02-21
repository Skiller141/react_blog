import React, { Component } from 'react'
import Posts from '../Posts'
import FullPost from '../FullPost';
import PropTypes from 'prop-types'

export class Content extends Component {
  // constructor() {
  //   super()
  //   this.component = null
  // }
  // componentDidMount() {
  //   if (this.props.posts !== undefined) {
  //     this.component = <Posts posts={this.props.posts} />
  //   } else if (this.props.post !== undefined) {
  //     this.component = <FullPost fullPost={this.props.fullPost} />
  //   }
  // }
  
  render() {
    if (this.props.posts !== undefined) {
      this.component = <Posts posts={this.props.posts} />
    }
    
    if (this.props.fullPost !== undefined) {
      this.component = <FullPost fullPost={this.props.fullPost} />
    }
    return (
      <div style={contentStyle}>
        {/* <Posts posts={this.props.posts} /> */}
        {this.component}
      </div>
    )
  }
}

const contentStyle = {
  dispday: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  maxWidth: '700px',
  float: 'left'
}

Content.propTypes = {
  posts: PropTypes.array
}

export default Content
