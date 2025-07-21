import React, { useState } from 'react';

function SectionForm() {
  const [formData, setFormData] = useState({
    country: '',
    name: '',
    organization: '',
    period: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("country", formData.country);
    form.append("name", formData.name);
    form.append("organization", formData.organization);
    form.append("period", formData.period);

    // POST to FastAPI
    fetch("http://localhost:8000/sections", {
      method: "POST",
      body: form,
    })
    .then(res => res.text()) // because response is HTML
    .then(html => {
      const newWindow = window.open();
      newWindow.document.write(html);
    })
    .catch(err => console.error("Error submitting form:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Country:
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
      </label><br />

      <label>Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label><br />

      <label>Organization:
        <input type="text" name="organization" value={formData.organization} onChange={handleChange} required />
      </label><br />

      <label>Period:
        <input type="text" name="period" value={formData.period} onChange={handleChange} required />
      </label><br />

      <button type="submit">Start Assessment</button>
    </form>
  );
}

export default SectionForm;
