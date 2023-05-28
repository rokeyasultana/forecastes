import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherInfo from '../components/WeatherInfo';
import { getWeatherData } from '../services/WeatherService';
import './Home.css';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const data = await getWeatherData(city);
      setWeather(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container"> 
  
    <WeatherForm onSearch={handleSearch} />
    {loading ? (
      <p>Loading...</p>
    ) : weather ? (
      <WeatherInfo weather={weather} />
    ) : null}
  </div>
  );
};

export default Home;
