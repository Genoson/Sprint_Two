import React from "react";

const Settings = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="ChangeHomeTown">Change Home Town</label>
        <input type="text" id="ChangeHomeTown" />
        <label htmlFor="AdditionalCityOne">Track Additional City</label>
        <input type="text" id="AdditionalCityOne" />
        <label htmlFor="AdditionalCityTwo">Track Additional City</label>
        <input type="text" id="AdditionalCityTwo" />
        <label htmlFor="AdditionalCityThree">Track Additional City</label>
        <input type="text" id="AdditionalCityThree" />
        <label htmlFor="ForecastTypes">Select Visible Forecasts</label>
        
          <label class="checkOne" htmlFor="CurrentForecast">Current</label>
          <label class="checkTwo" htmlFor="HourlyForecast">Hourly</label>
          <input class="checkOne" type="checkbox" id="CurrentForecast" name="ForecastTypes" />
          <input class="checkTwo" type="checkbox" id="HourlyForecast" name="ForecastTypes" />
          <label class="checkThree" htmlFor="DailyForecast">Daily</label>
          <label class="checkFour" htmlFor="LongRangeForecast">Long Range</label>
          <input class="checkThree" type="checkbox" id="DailyForecast" name="ForecastTypes" />
          <input class="checkFour" type="checkbox" id="LongRangeForecast" name="ForecastTypes" />
        
        <input class="submit" type="Submit" value="Submit" />
        <input class="clear" type="Submit" value="Clear" />
      </form>
    </div>
  );
};

export default Settings;
