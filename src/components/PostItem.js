import React from 'react';
import './PostItem.css';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
        <span className="post-category">{post.category}</span>
      </div>
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className="post-details">
          <span>{post.date}</span>
          <span>🗨️ {post.comments}</span>
          <span>👁️ {post.views}</span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
