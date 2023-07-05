import React, { useState } from "react";
import "./ForecastData.css";
import axios from "axios";

export default function ForecastData(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }
  //console.log(props);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="ForecastData">
        <div className="row">
          <div className="col">
            <div className="ForecastData-day">{forecast.list[0].dt}</div>
            <img
              src={forecast.list[0].weather[0].iconURL}
              alt={forecast.description}
            />
            <div className="ForecastData-temperature">
              <span className="ForecastData-max">
                {Math.round(forecast.list[0].main.temp_max)}°
              </span>
              <span className="ForecastData-min">
                {Math.round(forecast.list[0].main.temp_min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    let city = "Perth";
    // let longitude = props.coordinates.lon;
    // let latitude = props.coordinates.lat;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);

    return null;
  }
}
