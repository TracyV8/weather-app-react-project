import React from "react";
import "./ForecastData.css";
import axios from "axios";

export default function ForecastData(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
  let city = "Perth";
  // let longitude = props.coordinates.lon;
  // let latitude = props.coordinates.lat;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);

  return (
    <div className="ForecastData">
      <div className="row">
        <div className="col">
          <div className="ForeCastData-day">Thu</div>

          <div className="ForecastData-temperature">
            <span className="ForecastData-max">19°</span>
            <span className="ForecastData-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
