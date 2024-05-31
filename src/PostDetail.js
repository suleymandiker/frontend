import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './PostDetail.css';


function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Yeni state ekleyin


  useEffect(() => {
    axios.get(`https://enigmatic-peak-31224-722646e93474.herokuapp.com/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setLoading(false); // Yükleme tamamlandığında loading'i false yapın
      })
      .catch(error => {
        console.error("There was an error fetching the post!", error);
        setLoading(false); // Hata durumunda loading'i false yapın
      });
  }, [id]);

  if (loading) return <div>Loading...</div>; // loading state'i kontrol edin

  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <p>{post.description}</p>
      <div className="post-content">
        {/* Post içeriği burada olacak */}
        {/* Örneğin: <p>{post.content}</p> */}
      </div>
      <div className="post-meta">
        <span>Comments: {post.comments}</span>
        <span>Views: {post.views}</span>
      </div>
      <Link to={`/edit/${post._id}`}>Edit</Link>
   
    </div>
  );
}

export default PostDetail;
