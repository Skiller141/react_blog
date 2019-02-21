import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export class Post extends Component {
  constructor() {
    super()
    this.url = ''
  }

  render() {
    let { body, img, title, url} = this.props.post
    if (url !== undefined) {
      this.url = url
    }
    // console.log(url)
    return (
      <div style={ postStyle }>
        <div style={ postHeaderStyle }>
          <img src={ img } alt={ title } style={ imgStyle } />
          <h3 style={ postTitleStyle }>{ title }</h3>
        </div>
        <div style={ postBodyStyle }>
          <p>{ body }</p>
        </div>
        <div style={ postBottomStyle }>
          {/* {console.log(this.props.post)} */}
          <Link 
            // to={'/posts/' + title.replace(/ /g, '-').toLowerCase()}  
            to={ this.url }  
            style={ postButtonStyle }
          >
            More
          </Link>
        </div>
      </div>
    )
  }
}

const postStyle = {
  width: '300px',
  background: '#fff',
  color: '#333',
  border: '1px solid #ccc',
  display: 'inline-block',
  margin: '15px',
  verticalAlign: 'top'
}

const imgStyle = {
  width: '300px',
  height: '200px',
}

const postHeaderStyle = {
  // height: '300px',
}

const postTitleStyle = {
  borderTop: '1px solid #ccc',
  borderBottom: '1px solid #ccc',
  padding: '15px'
}

const postBodyStyle = {
  padding: '15px'
}

const postBottomStyle = {
  borderTop: '1px solid #ccc',
  // padding: '15px'
}

const postButtonStyle = {
  color: '#eee',
  background: 'coral',
  padding: '10px 30px',
  border: 'none',
  float: 'right',
  margin: '10px',
  textDecoration: 'none'
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post
