import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPost from './EditPost';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Suggestions from './Suggestions';

function App() {
  return (
    <Router>
      <div>
        <Banner />
        <Navbar />
        <div className="container">
          <div className="left-column">
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
          </div>
          <div className="right-column">
   
            <Suggestions />
         
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
