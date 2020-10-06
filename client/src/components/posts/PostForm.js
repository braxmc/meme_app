import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PostForm extends Component {
  state = { pTitle: '', pInfo: '', pBody: '', pImg: '' }

  componentDidMount() {
    if (this.props.id) {
      const { pTitle, pInfo, pBody, pImg } = this.props
      this.setState({ pTitle, pInfo, pBody, pImg })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { id, updatePost, close } = this.props
      updatePost(id, this.state)
      close()
    } else {
      this.props.addPost(this.state)
    }
    this.setState({ pTitle: '', pInfo: '', pBody: '', pImg: '' })
  }

  render() {
    const { pTitle, pInfo, pBody, pImg } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='pTitle'
          value={pTitle}
          onChange={this.handleChange}
          required
          placeholder='Post Title'
        />
        <Form.Input 
          name='pInfo'
          value={pInfo}
          onChange={this.handleChange}
          required
          placeholder='Subject'
        />
        <Form.TextArea 
          name='pBody'
          value={pBody}
          onChange={this.handleChange}
          required
          placeholder='Your Post Here'
        />
        <Form.Input 
          name='pImg'
          value={pImg}
          onChange={this.handleChange}
          required
          placeholder='Image URL'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default PostForm;
