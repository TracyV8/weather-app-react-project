import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Perth" />

        <footer>
          This project is coded by Tracy Vonk and is
          <a
            href="https://github.com/TracyV8/weather-app-react-project"
            target="-blank"
            rel="noopener noreferrer"
          >
            {" "}
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
