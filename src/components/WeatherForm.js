import React, { useState } from 'react';
import './WeatherForm.css';


const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Enter city name"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
    <button type="submit">Get Weather</button>
  </form>
);
};
  


export default WeatherForm;
