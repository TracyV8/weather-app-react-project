import React, { useState } from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import ForecastData from "./ForecastData";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.coord,
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    //let apiKey = "f5f0a9eb4490812b8cb30o193ft06985";

    //let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=f5f0a9eb4490812b8cb30o193ft06985&units=metric`;
    axios.get(`${apiUrl}`).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleNewCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
                onChange={handleNewCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
        <ForecastData info={weatherData} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
