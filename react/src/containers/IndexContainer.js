import React, { Component } from 'react';
import Posts from '../components/Posts';

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
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

  render() {
    return(
      <div>
        <h1>LinkSaver</h1>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default IndexContainer;
