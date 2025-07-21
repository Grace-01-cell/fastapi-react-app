import React, { useState } from 'react';

function SectionForm() {
  const [formData, setFormData] = useState({
    country: '',
    name: '',
    organization: '',
    period: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/sections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log(result);
      alert("Form submitted!");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Country:
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </label>
      <label>Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>Organization:
        <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
      </label>
      <label>Period of Review:
        <input type="text" name="period" value={formData.period} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SectionForm;
