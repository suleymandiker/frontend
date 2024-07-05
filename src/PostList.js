import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;




  useEffect(() => {
    axios.get('https://enigmatic-peak-31224-722646e93474.herokuapp.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  //console.log(posts)
  console.log("merhaba",posts.length)

    // Toplam sayfa sayısını hesapla
    const totalPages = Math.ceil(posts.length / itemsPerPage);

  // Şu anki sayfanın verilerini al
  const currentData = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <div>
        <h1>Paginition Test</h1>
        <div className="posts-list">
        {currentData.map(post => (
          <div key={post._id} className="post">
            {post.image && <img src={post.image} alt={post.title} className="post-image" />}
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="post-details">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>Comments: {post.comments}</span>
                <span>Views: {post.views}</span>
              </div>
              <Link to={`/posts/${post._id}`}>Read More</Link>
              <br/>
              <Link to={`/edit/${post._id}`}>Edit</Link>
            </div>
          </div>
        ))}
        </div>
        <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
        </div>

    </div>
  );
}

export default PostList;
