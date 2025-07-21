// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Introduction from './Intro';
import Details from './Details';
import Sidebar from './Sidebar';
import './App.css'; // if you want styles

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
