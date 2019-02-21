import React, { Component } from 'react'

export class FullPost extends Component {
  constructor() {
    super()
    this.post = {}
  }
  
  render() {
    this.props.fullPost.forEach(post => {
      if (post.url === window.location.pathname) {
        this.post = post
      }
    })
    const { title, body, img } = this.post;
    return (
      <div>
        <img src={ img } alt={ title } />
        <p>{ title }</p>
        <p>{ body }</p>
      </div>
    )
  }
}
// export class FullPost extends Component {
//   componentDidMount() {
//     console.log(this.props.fullPost)
//   }
//   render() {
//     const { title, body, img } = this.props.fullPost[0];
//     return (
//       <div>
//         <img src={ img } alt={ title } />
//         <p>{ title }</p>
//         <p>{ body }</p>
//       </div>
//     )
//   }
// }

export default FullPost
