// src/Details.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Details.css'; // if you plan to style it

const Details = () => {
  const navigate = useNavigate();

  return (
    <div className="details-container">
      <h1>Required fields</h1>

      <label htmlFor="country">Name of Country being assessed</label>
      <select id="country" className="form-control">
        <option>Nigeria</option>
        <option>Mozambique</option>
        <option>Ethiopia</option>
        <option>Democratic Republic of Congo</option>
      </select>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" className="form-control" />

      <label htmlFor="org">Organization</label>
      <input type="text" id="org" placeholder="Enter your organization's name" className="form-control" />

      <label htmlFor="review">Period of Review</label>
      <select id="review" className="form-control">
        <option>Q1 2024</option>
        <option>Q2 2024</option>
        <option>Q3 2024</option>
        <option>Q4 2024</option>
        <option>Q1 2025</option>
        <option>Q2 2025</option>
        <option>Q3 2025</option>
        <option>Q4 2025</option>
      </select>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default Details;
