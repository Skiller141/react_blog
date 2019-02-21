import React, { Component } from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

export class Posts extends Component {
  // componentDidMount() {
  //   console.log(this.props.posts)
  // }
  render() {
    return this.props.posts.map((post) => (
      <Post key={post.id} post={post} />
    ))
  }
}

Posts.propTypes = {
  posts: PropTypes.array
}

export default Posts
