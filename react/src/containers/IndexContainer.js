import React, { Component } from 'react';
import FormContainer from './FormContainer';
import Posts from '../components/Posts';

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearForm: false,
      errors: {},
      posts: []
    }
    this.addPost = this.addPost.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  componentDidMount(){
    fetch('/api/v1/posts.json', {credentials: 'same-origin'})
    .then(response => {
      let posts = response.json()
      return posts
    }).then(posts =>{
      this.setState({
        posts: posts
      });
    })
  }

  addPost(payload) {
    fetch('/api/v1/posts.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    .then((response) => {
      let { status } = response;
      if (status == 500) {
        throw('Server Error.')
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (typeof data.errors === "undefined") {
        this.setState({ posts: this.state.posts.concat(data), clearForm: true })
      } else {
        throw(data.errors);
      }
    })
    .catch((errors) => {
      this.setState({ errors: errors })
    })
  }

  resetForm() {
    this.setState({ errors: {}, clearForm: false })
  }

  render() {
    return(
      <div>
        <h1>LinkSaver</h1>
        <FormContainer clearForm={this.state.clearForm} errors={this.state.errors} addPost={this.addPost} resetForm={this.resetForm} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default IndexContainer;
