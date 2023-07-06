import React, { useState } from "react";
import "./ForecastData.css";
import axios from "axios";

export default function ForecastData(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  //console.log(props);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="ForecastData">
        <div className="row">
          <div className="col">
            <div className="ForecastData-day">{forecast[0].time}</div>
            <img
              src={forecast[0].condition.icon_url}
              alt={forecast[0].condition.description}
              sizes="16"
            />
            <div className="ForecastData-temperature">
              <span className="ForecastData-max">
                {Math.round(forecast[0].temperature.maximum)}°
              </span>
              <span className="ForecastData-min">
                {Math.round(forecast[0].temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    let city = props.info.city;
    console.log(city);

    // let longitude = props.coordinates.lon;
    // let latitude = props.coordinates.lat;
    //let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=f5f0a9eb4490812b8cb30o193ft06985&units=metric`;
    axios.get(`${apiUrl}`).then(handleResponse);

    return null;
  }
}
