import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';

import PostForm from './PostForm'


class Posts extends Component {
  state = { posts: [] }

  addPost = (post) => {
    axios.post('/api/posts', { post })
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Header>All Posts</Header>
        <PostForm addPost={this.addPost} />
      </Container>
    )
  }
}

export default Posts
