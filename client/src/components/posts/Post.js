import React, { Component } from 'react'
import { Header, Modal, Button } from 'semantic-ui-react';

// import { Link } from 'react-router-dom';

import PostForm from './PostForm';


class Post extends Component {
  state = { editing: false }

  open = () => this.setState({ editing: true })
  close = () => this.setState({ editing: false})

  render() {
    const { id, pTitle, pInfo, pBody, pImg, updatePost, deletePost } = this.props
    const { editing } = this.state

    return (
      <>
        <Header>{pTitle}</Header>
        <p>{pInfo}</p>
        <Modal
          onOpen={() => this.open()}
          onClose={() => this.close()}
          open={editing}
          trigger={<Button color='teal' onClick={() => this.open()}>Edit</Button>}
        >
          <Modal.Content>
            <PostForm 
              updatePost={updatePost}
              close={this.close}
              id={id}
              pTitle={pTitle}
              pInfo={pInfo}
              pBody={pBody}
              pImg={pImg}
            />
          </Modal.Content>
        </Modal>
        <Button color='red' onClick={() => deletePost(id)}>Delete</Button>
      </>
    )
  }
}

export default Post;
