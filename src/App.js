import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPost from './EditPost';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';



function App() {
  return (
    <Router>
      <div>
        <Banner />
        <Navbar />
        <div className="container">
        <main className="main-content">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
        </main>
        </div>
      </div>
    </Router>
  );
}

export default App;