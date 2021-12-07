import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid="3472f9dc0182851bae251704ca18a1fa"`
const Weather = ({userLoggedIn, userList}) => {
  const [weatherCity, setWeatherCity] = useState({});
  const [weatherDetailed, setWeatherDetailed] = useState({});

  let city = "St. john's";
  const getWeather = async(city) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3472f9dc0182851bae251704ca18a1fa`);
    let data = await response.json();
    setWeatherCity(data);
    console.log(weatherCity);
  } 

  useEffect(() => {
    getWeather(city);
  }, [])
  
  let main = weatherCity.main;
  let weather = weatherCity.weather;

  return (
    <div>
      <div>
        <h3>{`hello`}</h3>
        Customize you interface <Link to="/settings">Here</Link>
      </div>
      <section>
          <div>
            <h1>Weather Now</h1>
            <p>{`${weatherCity.name}: ${main.temp}\xB0C ${weather[0].description}`}</p>
          </div>
            <div>
                <h1>Weather short range</h1>
            </div>
            <div>
                <h1>Weather long range</h1>
            </div>

      </section>
    </div>
  );
};

export default Weather;
