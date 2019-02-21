import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Body, Footer } from './components/layouts'
import { About, Dashboard } from './components/pages'
import Login from './components/Login';
import Register from './components/Register';
import { NoImage } from './components/img';
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        // user_id: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        img: NoImage,
      },
      {
        // user_id: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        img: NoImage,
      },
      {
        // user_id: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        img: NoImage,
      }
    ]
  }

  componentDidMount() {
    const formData = new FormData()
    formData.append('render', true)
    fetch('http://localhost:80/test/', { method: 'POST', body: formData })
      .then(response => response.json())
      .then(response => this.setState({ posts: this.state.posts.concat(response) }))
      .then(() => this.setState(this.state.posts.map(post => post.url = '/posts/' + post.title.replace(/ /g, '-').toLowerCase())))
      // .then(() => console.log(this.state.posts))
  }

  addPost = (data) => {
    const formData = new FormData()
    formData.append('add_post', JSON.stringify(data))
    if (data.file !== undefined) {
      formData.append('file', data.file, data.file.name)
    }
    fetch('http://localhost:80/test/', { method: 'POST', body: formData })
      .then(response => response.text())
      .then(response => console.log(response))
  }

  editPost = (post) => {
    const formData = new FormData()
    formData.append('edit_post', JSON.stringify(post))
    fetch('http://localhost:80/test/', {
      method: 'POST', 
      // headers: {'Content-Type': 'application/json'},
      body: formData 
    })
      // .then(response => response.json())
      // .then(response => this.setState({ posts: this.state.posts.concat(response) }))
      // .then(() => this.setState(this.state.posts.map(post => post.url = '/posts/' + post.title.replace(/ /g, '-').toLowerCase())))
      // .then(() => console.log(this.state.posts))
      .then(response => response.text())
      .then(response => console.log(response))
  }

  auth = (user) => {
    const formData = new FormData()
    if (user.login) {
      formData.append('login', true)
    } else if (user.register) {
      formData.append('register', true)
    }
    formData.append('email', user.email)
    formData.append('password', user.password)
    fetch('http://localhost:80/test/', { method: 'POST', body: formData })
      .then(response => response.text())
      .then(response => console.log(response))
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Body posts={this.state.posts} />} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" render={() => <Dashboard addPost={this.addPost} editPost={this.editPost} allPosts={this.state.posts} />} />
          <Route path="/posts/:id" render={match => <Body fullPost={this.state.posts} />} />
          <Route path="/login" render={ () => <Login auth={ this.auth } /> } />
          <Route path="/register" render={ () => <Register auth={ this.auth } /> } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

// console.log(window.location.pathname)
