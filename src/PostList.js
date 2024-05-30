import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://enigmatic-peak-31224-722646e93474.herokuapp.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post._id} className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="post-details">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>Comments: {post.comments}</span>
              <span>Views: {post.views}</span>
            </div>
            <Link to={`/posts/${post._id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;