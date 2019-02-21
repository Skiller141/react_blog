import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import AddPost from './AddPost'
import AllPosts from './AllPosts';
import EditPost from './EditPost';
import PropTypes from 'prop-types'

export class Dashboard extends Component {
  onMouseOver = e => {
    e.target.style.color = '#eee'
    e.target.style.background = '#333'
  }

  onMouseOut = e => {
    e.target.style.color = '#333'
    e.target.style.background = '#eee'
  }
  render() {
    // console.log(this.props.addPost())
    return (
      <div style={dashboardStyle}>
        <nav style={sidebarStyle}>
          <Link
            to="/dashboard"
            style={sidebarLinkStyle}
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/addpost" 
            style={sidebarLinkStyle} 
            onMouseOver={this.onMouseOver} 
            onMouseOut={this.onMouseOut}
          >
            Add Post
          </Link>
          <Link
            to="/dashboard/allposts" 
            style={sidebarLinkStyle} 
            onMouseOver={this.onMouseOver} 
            onMouseOut={this.onMouseOut}
          >
            All Posts
          </Link>
        </nav>
        <div style={contentStyle}>
          <Route exact path="/dashboard" render={() => (
            <h1>Hello World</h1>
          )} />
          <Route path="/dashboard/addpost" render={() => <AddPost addPost={this.props.addPost} />} />
          <Route path="/dashboard/allposts" render={() => <AllPosts allPosts={this.props.allPosts} />} />
          <Route path="/dashboard/edit/:title" render={(param) => <EditPost path={param.match.params.title} editPost={this.props.editPost} allPosts={this.props.allPosts} />} />
        </div>
      </div>
    )
  }
}

const dashboardStyle = {
  display: 'flex',
  border: '1px solid #ccc',
  margin: '15px auto'
}

const sidebarStyle = {
  width: '200px',
  minHeight: '300px',
  maxHeight: '500px',
  borderRight: '1px solid #ccc',
  display: 'inline-block'
}

const sidebarLinkStyle = {
  display: 'block',
  textDecoration: 'none',
  color: '#333',
  textAlign: 'center',
  padding: '15px 0',
  borderBottom: '1px solid #ccc'
}

const contentStyle = {
  // width: '1029px',
  display: 'inline-block',
  verticalAlign: 'top'
}

Dashboard.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default Dashboard
