import React, { Component } from 'react';
import axios from 'axios';


export class PostProvider extends Component {
  state = { posts: [] }

  addPost = (post) => {
    axios.post('/api/posts', { post })
      .then( res => {
        const { posts } = this.state
        this.setState({ posts: [...posts, res.data]})
      })
      .catch( err => console.log(err) )
  }

  render() {
    return (
      <>
        
      </>
    )
  }
}

export default PostProvider
