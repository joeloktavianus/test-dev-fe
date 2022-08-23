// import logo from './logo.svg';
import React, { useState } from 'react';
// import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  const { token, setToken } = useState();

  // if(!token) {
  //   return (
  //     <div className="wrapper">
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/home" element={<Preferences />} />
  //           <Route path="/home/login" element={<Login setToken={setToken} />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </div>)
  // }
  return (
    <div className="wrapper">
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Preferences />} />
          <Route path="/home/login" element={<Login setToken={setToken} />} />
          <Route path="/profile" element={<Profile />} />
          <Route name="detailPost" path="/detail/post/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
