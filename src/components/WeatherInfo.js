import React from 'react';
import './WeatherInfo.css';

const WeatherInfo = ({ weather }) => {
  return (
    <div className="weather-info">
      <h2>Weather Information</h2>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherInfo;
