import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import './App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async () => {
    const API_KEY = '552b1f11d0e4df670828bdf0e1d13e9f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('Invalid location');
      setWeatherData(null); // Clear weather data when there is an error
    }
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <header className="app-header">
        <h1>Weather App</h1>
        <div className='flex'>
          <input
            type="text"
            placeholder="Enter city or zip code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />
          <button onClick={fetchWeather}>Search</button>
          <div className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <span role="img" aria-label="Light Mode">
                <MdOutlineLightMode className='icon'/>
              </span>
            ) : (
              <span role="img" aria-label="Dark Mode">
                <MdOutlineDarkMode className='icon'/>
              </span>
            )}
          </div>
        </div>
      </header>
      {error && <p className="error">{error}</p>}
      {!error && weatherData && <Weather data={weatherData} darkMode={darkMode} />}
    </div>
  );
};

export default App;
