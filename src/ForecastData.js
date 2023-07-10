import React, { useState, useEffect } from "react";
import "./ForecastData.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function ForecastData(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  //console.log(props);
  function handleResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    //console.log(forecast);
    return (
      <div className="ForecastData">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "f5f0a9eb4490812b8cb30o193ft06985";
    //let city = props.city.city;
    //console.log(city);

    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(handleResponse);

    return null;
  }
}
