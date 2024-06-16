import React from 'react';

const Weather = ({ data, darkMode }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Date and Time: {new Date().toLocaleString()}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Weather: {data.weather[0].description}</p>
      <img src={iconUrl} alt="Weather icon" className={darkMode ? 'dark-mode-icon' : ''} />
    </div>
  );
};

export default Weather;
