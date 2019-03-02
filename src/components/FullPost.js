import React, { Component } from 'react'

export class FullPost extends Component {
  // constructor() {
  //   super()
  //   this.post = {}
  // }

  state = {
    post: {}
  }

  componentDidMount() {
    this.props.fullPost.forEach(post => {
      if(post !== undefined) {
        if (post.title.replace(/ /g, '-').toLowerCase() === window.location.pathname.slice(7)) {
          this.setState({ post })
          console.log(this.state)
        }
      }
    })
  }
  
  render() {
    const { title, body, img } = this.state.post;
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
