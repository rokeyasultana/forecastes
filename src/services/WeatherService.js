const API_KEY = 'c6f356b9e366499fa33144713232705'; 

export const getWeatherData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    
    
    const { location, current } = data;
    const weatherData = {
      city: location.name,
      temperature: current.temp_c,
      conditions: current.condition.text,
    };
    
    return weatherData;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};
