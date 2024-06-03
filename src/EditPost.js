import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditPost.css';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    description: '',
    date: '',
    category: '',
    views: 0,
    comments: 0,
    image: '' // Yeni image alanı
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://enigmatic-peak-31224-722646e93474.herokuapp.com/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the post!", error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://enigmatic-peak-31224-722646e93474.herokuapp.com/posts/${id}`, post)
      .then(response => {
        navigate(`/posts/${id}`);
      })
      .catch(error => {
        console.error("There was an error updating the post!", error);
      });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="edit-post">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={post.title} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={post.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={new Date(post.date).toISOString().substring(0, 10)} onChange={handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={post.category} onChange={handleChange} />
        </div>
        <div>
          <label>Views:</label>
          <input type="number" name="views" value={post.views} onChange={handleChange} />
        </div>
        <div>
          <label>Comments:</label>
          <input type="number" name="comments" value={post.comments} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={post.image} onChange={handleChange} />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export default EditPost;
