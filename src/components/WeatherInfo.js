import React from 'react';

const WeatherInfo = ({ weather }) => {
  return (
    <div>
      <h2>Weather Information</h2>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherInfo;
