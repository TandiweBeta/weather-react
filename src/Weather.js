import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Weather(props) {
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=34e1e89cfad74d6608db83f1e99b96a3&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
    
      let form = (
        <div className="weather-container">
          <h1>Weather App React</h1>
        
        <form className="" onSubmit={handleSubmit}>
          <input
                className="search-form-input"
                type="search"
                autoFocus
                placeholder="Enter a City..."
                onChange={updateCity}
              />
      
              <input
                className="search-form-button"
                type="submit"
                value="search"
              />
        </form>
     <h2> Johannesburg</h2>
     <ul>
      <li> Tuesday 09:00</li>
      <li>  Clear Sky</li>
     </ul>

     <div className="row">
      <div className = "col-6 ">
        <div className="clearfix">
          <img src = "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"/>
          <span>15°C</span>
          </div>
          </div>
          <div className="col-6">
            <ul>
              <li> Precipitation 30%</li>
              <li> Humidity 50%</li>
              <li> Wind 20km/hr</li>
               </ul>
          </div>
         </div>
         </div>
      );


     if (loaded) {
       return (
        <div className="container">
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}°c</li>
          <li>Description:{weather.description}</li>
          <li>Humidity:{weather.humidity}</li>
          <li>Wind:{weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

