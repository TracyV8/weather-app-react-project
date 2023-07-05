import React from "react";
import "./ForecastData.css";

export default function ForecastData() {
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
