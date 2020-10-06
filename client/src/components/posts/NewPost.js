import React, { Component } from 'react'
import { Header, Modal, Button } from 'semantic-ui-react';

// import { Link } from 'react-router-dom';

import PostForm from './PostForm';


class NewPost extends Component {
  state = { adding: false }

  open = () => this.setState({ adding: true })
  close = () => this.setState({ adding: false})

  render() {
    const { id, pTitle, pInfo, pBody, pImg, addPost } = this.props
    const { adding } = this.state

    return (
      <>
        <Header>{pTitle}</Header>
        <p>{pInfo}</p>
        <Modal
          onOpen={() => this.open()}
          onClose={() => this.close()}
          open={adding}
          trigger={<Button color='green' onClick={() => this.open()}>New Post</Button>}
        >
          <Modal.Content>
            <PostForm 
              close={this.close}
              addPost={addPost}
              id={id}
              pTitle={pTitle}
              pInfo={pInfo}
              pBody={pBody}
              pImg={pImg}
            />
          </Modal.Content>
        </Modal>
      </>
    )
  }
}

export default NewPost;