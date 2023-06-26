import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          {" "}
          <FormatDate date={props.info.date} />
        </li>
        <li className="text-capitalize"> {props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={props.info.iconUrl}
            alt={props.info.description}
            className="float-left"
          />
          <span className="temperature">
            {Math.round(props.info.temperature)}
          </span>{" "}
          <span className="unit">°C/°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Pressure: {props.info.pressure}</li>
            <li>Humidity: {props.info.humididty}%</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}