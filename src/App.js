import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPost from './EditPost';
import './App.css';
//import Banner from './Banner';
//import Navbar from './Navbar';
import Suggestions from './Suggestions';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import PostList from './components/PostList';
import Recommendations from './components/Recommendations';




function App() {

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
   
    <div className="bg-gray-100 min-h-screen">
      <h1 className='text-center text-lg text-green-400'>Merhaba</h1>
      <div className='w-full h-10 bg-violet-200 border-violet-600 rounded-md my-4 p-2'>
      <p className='text-center font-mono font-extrabold text-lg'>A div</p>
      </div>
      <div className='fixed w-10 h-10 bg-red-500 top-0'></div>
      <div className='flex justify-between'>
        <div className='h-16 w-16 rounded-full bg-blue-500'></div>
        <div className='h-16 w-16 rounded-full bg-blue-500'></div>
        <div className='h-16 w-16 rounded-full bg-blue-500'></div>
      </div>
      <div className='grid grid-cols-3 gap-2 mt-3'>
          <div className='bg-violet-500 h-12'></div>
          <div className='bg-violet-500 h-12'></div>
          <div className='bg-violet-500 h-12'></div>
      </div>
      <div className='md:block hidden'>
        <p>I will appear for device resultion > 768px </p>
      </div>
      <div className='max-md:block hidden'>
        <p>I will appear for device resultion < 768px </p>
      </div>
    
  </div>  

  );
}

export default App;
