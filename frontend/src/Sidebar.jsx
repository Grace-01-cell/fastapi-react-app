import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Introduction</Link></li>
        <li><Link to="/details">Details</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
