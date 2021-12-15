import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {ReactComponent as Clouds} from "./media/Cloud2.svg";

// the main portion of this web app
// displays weather report bases on user account information

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid="3472f9dc0182851bae251704ca18a1fa"`
const Weather = (props) => {
  const [weatherCity, setWeatherCity] = useState({});
  const [weatherDetailed, setWeatherAlerts] = useState({});
  const [whichDay, setWhichDay] = useState(1);
  

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let city = currentUser.hometown;
  const getWeather = async (city) => {
    // fetches weather info from the web api based on user data
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
    // converts wind direction in degrees to cardinal direction
    // let flooredWind = Math.floor(wind.deg)
    let flooredWind = Math.floor(wind);
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

  const dayPlus = () => {
    // adds one day to the current day
    if (whichDay < 7) {
      setWhichDay(whichDay + 1)
    }
  }

  const dayMinus = () => {
    // subtracts one day from the current day
    if (whichDay > 1) {
      setWhichDay(whichDay - 1)
    }
  }

  const convertUTC = (time) => {
    // converts UTC time to the month and day
    let date = new Date(time * 1000);
    let month = date.getMonth() + 1;
    if (month === 1) {
      month = "January";
    } else if (month === 2) {
      month = "February";
    } else if (month === 3) {
      month = "March";
    } else if (month === 4) {
      month = "April";
    } else if (month === 5) {
      month = "May";
    } else if (month === 6) {
      month = "June";
    } else if (month === 7) {
      month = "July";
    } else if (month === 8) {
      month = "August";
    } else if (month === 9) {
      month = "September";
    } else if (month === 10) {
      month = "October";
    } else if (month === 11) {
      month = "November";
    } else if (month === 12) {
      month = "December";
    }

    let day = date.getDate();
    return `${month} ${day}`;
  }

  useEffect(() => {
    getWeather(city);
    // if (weatherCity.coord !== undefined){ 
    //   getWeatherAlerts(weatherCity.coord.lat, weatherCity.coord.lon);
    //   console.log(weatherDetailed);
    // }
  }, [city]);

  // if statement for return, loading page while fetching data
  // weather report is displayed if data is fetched

  if (weatherCity.name === undefined || weatherDetailed.timezone === undefined || weatherDetailed.hourly[47] === undefined) {
    return (
      <div id="weatherLoading">
        <h1>Weather</h1>
        <p>Loading...</p>
        <div id="cloud1"><Clouds/></div>
        <div id="cloud2"><Clouds/></div>
      </div>
    );
  } else {

  return (
    <div id="weatherPage">
      <div>
      <div id="cloud1Mov"><Clouds/></div>
        <div id="cloud2Mov"><Clouds/></div>
        <h3>{`Welcome  ${currentUser.firstname}`}</h3>
       
      </div>
      <section>
        <div id="weatherAlert" >
          {weatherDetailed.alerts === undefined ? null :<h3>{weatherDetailed.alerts[0].sender_name}: <br/> {(weatherDetailed.alerts[0].event)} </h3>}
          <div><p>{weatherDetailed.alerts === undefined ? null :`${weatherDetailed.alerts[0].description}`}</p></div>
        </div>
        <div id="weatherNowContainer">
          <h1>{`Weather Now in ${weatherCity.name}`}</h1>
          <div className="weatherNow">
          {/* {`${weatherCity.name}: ${weatherCity.main.temp}\xB0C ${weatherCity.weather[0].description}`} */}
          <p>{`Temperature: ${Math.round(weatherCity.main.temp)}\xB0C`}</p>
            <p>{`Conditions: ${weatherCity.weather[0].main}, ${weatherCity.weather[0].description}`}</p>
            <p>{`Humidity: ${weatherCity.main.humidity}%`}</p>
            <p>{`Wind Speed: ${(weatherCity.wind.speed*3.6).toFixed()} km\\h`}</p>
            <p>{`Gusting to: ${(weatherCity.wind.gust*3.6).toFixed()} km\\h`}</p>
            <p>{`Wind Direction: ${windDirection(weatherCity.wind.deg)}`}</p>
          </div>
        </div>
        <div id="weatherDailyContainer">
          <h1>Daily Forecast</h1>
          <div className="weatherDaily">
            <p style={{fontWeight:'bold'}}>{`${convertUTC(weatherDetailed.daily[whichDay].dt)}`}</p>
          <p>{`Temperature: ${Math.round(weatherDetailed.daily[whichDay].temp.min)}\xB0C to ${Math.round(weatherDetailed.daily[whichDay].temp.max)}\xB0C`}</p>
            <p>{`Conditions: ${weatherDetailed.daily[whichDay].weather[0].main}, ${weatherDetailed.daily[whichDay].weather[0].description}`}</p>
            <p>{`Humidity: ${weatherDetailed.daily[whichDay].humidity}%`}</p>
            <p>{`Wind Speed: ${(weatherDetailed.daily[whichDay].wind_speed*3.6).toFixed()} km\\h`}</p>
            <p>{`Gusting to: ${(weatherDetailed.daily[whichDay].wind_gust*3.6).toFixed()} km\\h`}</p>
            <p>{`Wind Direction: ${windDirection(weatherDetailed.daily[whichDay].wind_deg)}`}</p>
          </div>
          <div id="weatherDailyButtons">
            <button class="weatherButton" onClick={dayMinus}>Previous</button>
            <button class="weatherButton" onClick={dayPlus}>Next</button>
            </div>
        </div>
        
      </section>
    </div>
  );}
};

export default Weather;