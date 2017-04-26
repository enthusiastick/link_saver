import React from 'react';

const Posts = props => {
  let posts = props.posts.map(post => {
    return(
      <li key={post.id}>
        <a href={post.url} target="_blank">
          {post.summary}
        </a>
      </li>
    )
  });

  return (
    <ul>
      {posts}
    </ul>
  );
}

export default Posts;
