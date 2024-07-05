import React, { useState } from 'react';
import PostItem from './PostItem';
import './PostList.css';

const PostList = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(2);

  const handleLoadMore = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 2);
  };

  return (
    <div className="post-list">
      {posts.slice(0, visiblePosts).map(post => (
        <PostItem key={post.id} post={post} />
      ))}
      {visiblePosts < posts.length && (
        <button onClick={handleLoadMore} className="load-more-button">
          DAHA FAZLA GÖSTER
        </button>
      )}
    </div>
  );
};

export default PostList;
