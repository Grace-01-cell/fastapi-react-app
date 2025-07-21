// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/introduction" className="nav-link">Introduction</NavLink>
      <NavLink to="/details" className="nav-link">Details</NavLink>
      <NavLink to="/assessment" className="nav-link">Assessment Sections</NavLink>
    </div>
  );
};

export default Sidebar;
