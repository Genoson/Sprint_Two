import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Create functionality to click on a report zone and minimize the card.
// ** especially the alert card. **

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid="3472f9dc0182851bae251704ca18a1fa"`
const Weather = (props) => {
  const [weatherCity, setWeatherCity] = useState({});
  const [weatherDetailed, setWeatherAlerts] = useState({});
  

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let city = currentUser.hometown;
  const getWeather = async (city) => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3472f9dc0182851bae251704ca18a1fa`
    );
    let data = await response.json()
    setWeatherCity(data);
    let response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=3472f9dc0182851bae251704ca18a1fa`
    );
    let data2 = await response2.json()
    setWeatherAlerts(data2);
    console.log(data2)

  };

  // const getWeatherAlerts = async (lat, lon) => {
  //   let response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=3472f9dc0182851bae251704ca18a1fa`
  //   );
  //   let data = await response.json()
  //   setWeatherAlerts(data);
  // };

  const windDirection = (wind) => {
    let flooredWind = Math.floor(wind.deg)
    if (flooredWind > 337.5 || flooredWind < 22.5) {
      return "N";
    } else if (flooredWind > 22.5 && flooredWind < 67.5) {
      return "NE";
    } else if (flooredWind > 67.5 && flooredWind < 112.5) {
      return "E";
    } else if (flooredWind > 112.5 && flooredWind < 157.5) {
      return "SE";
    } else if (flooredWind > 157.5 && flooredWind < 202.5) {
      return "S";
    } else if (flooredWind > 202.5 && flooredWind < 247.5) {
      return "SW";
    } else if (flooredWind > 247.5 && flooredWind < 292.5) {
      return "W";
    } else if (flooredWind > 292.5 && flooredWind < 337.5) {
      return "NW";
    }
  }

  useEffect(() => {
    getWeather(city);
    // if (weatherCity.coord !== undefined){ 
    //   getWeatherAlerts(weatherCity.coord.lat, weatherCity.coord.lon);
    //   console.log(weatherDetailed);
    // }
  }, [city]);

  // useEffect(() => {
  //   getWeatherAlerts(weatherCity.coord.lat, weatherCity.coord.lon);
  //   console.log(weatherDetailed);
  // }, [weatherCity]);


  //{`${weatherCity.name}: ${main.temp}\xB0C ${weather[0].description}`}
  if (weatherCity.name === undefined || weatherDetailed.timezone === undefined) {
    return (
      <div>
        <h1>Weather</h1>
        <p>Loading...</p>
      </div>
    );
  } else {

  return (
    <div id="weatherPage">
      <div>
        <h3>{`hello ${currentUser.firstname}`}</h3>
        Customize you interface <Link to="/settings">Here</Link>
      </div>
      <section>
        <div id="weatherAlert">
          {weatherDetailed.alerts === undefined ? null :<h3>{weatherDetailed.alerts[0].sender_name}: <br/> {(weatherDetailed.alerts[0].event)} </h3>}
          <p>{weatherDetailed.alerts === undefined ? null :`${weatherDetailed.alerts[0].description}`}</p>
        </div>
        <div>
          <h1>{`Weather Now in ${weatherCity.name}`}</h1>
          <div className="weatherNow">
          {/* {`${weatherCity.name}: ${weatherCity.main.temp}\xB0C ${weatherCity.weather[0].description}`} */}
          <p>{`Temperature: ${Math.round(weatherCity.main.temp)}\xB0C`}</p>
            <p>{`Conditions: ${weatherCity.weather[0].main}, ${weatherCity.weather[0].description}`}</p>
            <p>{`Humidity: ${weatherCity.main.humidity}%`}</p>
            <p>{`Wind Speed: ${(weatherCity.wind.speed*3.6).toFixed()} km\\h`}</p>
            <p>{`Gusting to: ${(weatherCity.wind.gust*3.6).toFixed()} km\\h`}</p>
            <p>{`Wind Direction: ${windDirection(weatherCity.wind)}`}</p>
          </div>
        </div>
        <div>
          <h1>Weather short range</h1>
        </div>
        <div>
          <h1>Weather long range</h1>
        </div>
      </section>
    </div>
  );}
};

export default Weather;