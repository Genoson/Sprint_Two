import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid="3472f9dc0182851bae251704ca18a1fa"`
const Weather = (props) => {

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
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
