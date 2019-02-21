import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AllPosts extends Component {
	// componentDidMount() {
	// 	console.log('allposts', this.props.allPosts)
	// }
	render() {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }}>All Posts</h1>
				<div style={ contanerStyle }>
					{
						this.props.allPosts.map(post => {
              const { id, title } = post
              return (
                <div key={ id } style={ postStyle }>
                  { title }
                  <span style={{ float: 'right' }}>
                    <Link to={ '/dashboard/edit/' + title.replace(/ /g, '-').toLowerCase() }>Edit</Link> | <span>Delete</span>
                  </span>
                </div>
              )
						})
					}
				</div>
			</div>
		)
	}
}

const contanerStyle = {
	border: '1px solid #ccc',
	borderTop: 'none',
	width: '1000px',
	// display: 'block',
	margin: '10px auto',
}

const postStyle = {
	padding: '10px',
	borderTop: '1px solid #ccc',
	listStyle: 'none'
}

export default AllPosts
