import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid="3472f9dc0182851bae251704ca18a1fa"`
const Weather = (props) => {
  const [weatherCity, setWeatherCity] = useState({});
  const [weatherDetailed, setWeatherDetailed] = useState({});
  const [main, setMain] = useState({});
  const [weather, setWeather] = useState({});

  console.log(props.userLoggedIn);
  let city = "St. john's";
  const getWeather = async (city) => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3472f9dc0182851bae251704ca18a1fa`
    );
    let data = await response.json()
    // console.log(data);
    return data;
      // .then(() => {
      //   setWeatherCity(data);
      // })
      // .then(() => {
      //   setMain(weatherCity.main);
      //   setWeather(weatherCity.weather);
      // });
  //   setWeatherCity(data);
  //   setMain(weatherCity.main);
  //   setWeather(weatherCity.weather);
  //   console.log(weatherCity);
  };



  const defineMainWeather = () => {
    setMain(weatherCity.main)
    setWeather(weatherCity.weather)
  }

  const displayWeather = () => {
    let report = document.getElementsByClassName("weatherNow")[0];
    report.innerHTML = `${weatherCity.name}: ${weatherCity.main.temp}\xB0C ${weatherCity.weather[0].description}`
  }

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await getWeather(city).then(setTimeout(() => {
      setWeatherCity(data)
      }, 1000)).then(setTimeout(() => {
      defineMainWeather()}, 1200)).then(setTimeout(() => {

      displayWeather();
      }, 1500));
      
      // setTimeout(()=>{
      // setWeatherCity(data)
      // setMain(data.main)
      // setWeather(data.weather)}, 100);
    };
    getWeatherData()
    setTimeout(()=>console.log(weatherCity), 250);
    // setTimeout(displayWeather, 600);
  }, []);


  // let main = weatherCity.main;
  // let weather = weatherCity.weather;
  //{`${weatherCity.name}: ${main.temp}\xB0C ${weather[0].description}`}
  return (
    <div>
      <div>
        <h3>{`hello`}</h3>
        Customize you interface <Link to="/settings">Here</Link>
      </div>
      <section>
        <div>
          <h1>Weather Now</h1>
          <p className="weatherNow"></p>
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
