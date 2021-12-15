import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// a since deprecated backup of ym journey to the functioning weather page
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid="3472f9dc0182851bae251704ca18a1fa"`
const Weather = (props) => {

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let currentWeather = JSON.parse(localStorage.getItem("currentWeather"));
  let currentMain = currentWeather.main
  let weatherCurrent = currentWeather.weather[0]
  let windCurrent = currentWeather.wind

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
  let windDirectionCurrent = windDirection(windCurrent);

  //{`${weatherCity.name}: ${main.temp}\xB0C ${weather[0].description}`}
  // need to convert this into a branched return based on the state of the weather
  return (
    <div>
      <div>
        <h3>{`Hello ${currentUser.firstname}`}</h3>
        Customize you interface <Link to="/settings">Here</Link>
      </div>
      <section>
        <div>
          <h1>{`Current Weather Conditions in ${currentWeather.name}`}</h1>
          <div className="weatherNow">
            <p>{`Temperature: ${currentMain.temp}\xB0C`}</p>
            <p>{`Conditions: ${weatherCurrent.main}, ${weatherCurrent.description}`}</p>
            <p>{`Humidity: ${currentMain.humidity}%`}</p>
            <p>{`Wind Speed: ${(windCurrent.speed*3.6).toFixed()} km\\h`}</p>
            <p>{`Gusting to: ${(windCurrent.gust*3.6).toFixed()} km\\h`}</p>
            <p>{`Wind Direction: ${windDirectionCurrent}`}</p>
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
  );
};

export default Weather;
