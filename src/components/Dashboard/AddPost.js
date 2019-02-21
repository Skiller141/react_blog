import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NoImage } from '../img';

export class AddPost extends Component {
  state = {
    // user_id: 1,
    id: 4,
    title: '',
    body: '',
    post_img: NoImage,
    // url: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    const poster = document.querySelector('#poster')
    if (poster.files.length > 0) {
      this.setState({ file: poster.files[0] })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addPost(this.state)
  }

  render() {
    return (
      <div>
        <div style={addPostTitleStyle}>Add Post</div>
        <div style={addPostBodyStyle}>
          <form action="" method="post" onSubmit={this.onSubmit} encType="multipart/form-data">
            <label htmlFor="post_img" style={btnUploadStyle}>Upload Img</label>
            <input style={{ display: 'none' }} onChange={this.onChange} type="file" name="poster" id="poster" />
            <label htmlFor="title">Title:</label><br />
            <input type="text" name="title" onChange={this.onChange} /><br /><br />
            <label htmlFor="body">Text:</label><br />
            <textarea name="body" cols="30" rows="10" onChange={this.onChange}></textarea><br />
            <button type="submit" style={btnSubmitStyle}>Add Post</button>
          </form>
        </div>
        
      </div>
    )
  }
}

const addPostTitleStyle = {
  // display: 'block',
  padding: '15px',
  borderBottom: '1px solid #ccc',
  fontSize: '26px',
  textAlign: 'center'
}

const addPostBodyStyle = {
  padding: '15px 50px 15px 50px'
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

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default AddPost
