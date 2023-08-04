import React from "react";

const WeatherForecastDetails = ({ data }) => {
  const forecastFilter = data.list.filter((item, i) => item.dt_txt.split(" ")[1].slice(0,2) === "15"); 

  return (
    <div>
      <ul className="forecast-items-container">
        {forecastFilter.map((day, i) => (
          <li key={i} className="forecast-day">
            <h3>{day.dt_txt}</h3>
            <p>{day.main.temp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecastDetails;
