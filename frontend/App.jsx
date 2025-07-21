import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Introduction from './Intro';
import Details from './Details';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
