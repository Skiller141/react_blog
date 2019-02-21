import React, { Component } from 'react'

export class EditPost extends Component {
  state = {
    title: 'default',
    body: 'default',
    img: 'default'
  }

  componentDidMount() {
    this.props.allPosts.forEach(post => {
      if (post.url !== undefined) {
        if (post.url.slice(7) === window.location.pathname.slice(16)) {
          // this.props.editPost(post.id)
          this.setState({ title: post.title, body: post.body, img: post.img })
        }
      }
    })
    console.log(this.props)
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    // console.log(this.state)
  }
  
  onSubmit = (e) => {
    e.preventDefault()
    this.props.allPosts.forEach(post => {
      if (post.url.slice(7) === window.location.pathname.slice(16)) {
        this.props.editPost(this.state)
        // console.log(post)
      }
    })
  }

  render() {
    return (
      <div>
        {/* <h1>{this.props.path.match.params.id}</h1> */}
        <form action="" method="post" onSubmit={this.onSubmit} encType="multipart/form-data">
          <label htmlFor="post_img" style={btnUploadStyle}>Upload Img</label>
          <input style={{ display: 'none' }} onChange={this.onChange} type="file" name="poster" id="poster" />
          <label htmlFor="title">Title:</label><br />
          <input type="text" name="title" onChange={this.onChange} value={ this.state.title } /><br /><br />
          <label htmlFor="body">Text:</label><br />
          <textarea name="body" cols="30" rows="10" onChange={this.onChange} value={ this.state.body }></textarea><br />
          <button type="submit" style={btnSubmitStyle}>Edit Post</button>
        </form>
      </div>
    )
  }
}

const btnUploadStyle = {
  display: 'block',
  background: '#424949',
  color: '#fff',
  width: '100px',
  height: '30px',
  textAlign: 'center',
  lineHeight: '30px',
  margin: '15px 0',
  cursor: 'pointer'
}

const btnSubmitStyle = {
  padding: '10px 30px',
  color: '#eee',
  background: 'coral',
  border: 'none',
  cursor: 'pointer'
}

export default EditPost
