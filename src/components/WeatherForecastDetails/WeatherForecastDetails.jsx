import React from "react";
import "./WeatherForecastDetails.css";

const WeatherForecastDetails = ({ data }) => {
  const forecastFilter = data.list.filter(
    (item, i) => item.dt_txt.split(" ")[1].slice(0, 2) === "15"
  );

  function getDayOfWeek(dateString) {
    const dateObj = new Date(dateString);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dayOfWeekIndex = dateObj.getDay();

    const dayOfWeek =
      dateString.slice(8, 10).split("")[0] === "0"
        ? dateString.slice(8, 10).split("")[1]
        : dateString.slice(8, 10);

    return `${daysOfWeek[dayOfWeekIndex]} ${dayOfWeek}`;
  }

  return (
    <ul className="forecast-days-container">
      {forecastFilter.map((day, i) => (
        <li key={i} className="day-container">
          <div className="forecast-basic-info">
            <h3 className="forecast-date">
              {getDayOfWeek(day.dt_txt.slice(0, 10))}
            </h3>
            <p className="forecast-time">15:00</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="forecast-temp-img"
            />
          </div>
          <div className="description-temp-container">
            <p className="forecast-weather-description">
              {day.weather[0].description}
            </p>
            <div className="forecast-temp-container">
              <p className="forecast-temp">{Math.round(day.main.temp)}</p>
              <p className="forecast-degree">ºC</p>
            </div>
          </div>
          <div className="forecast-details-container">
            <div className="forecast-details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="details-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#f5f5f5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
              </svg>
              <p className="details-description">Wind</p>
              <p className="details-data">{day.wind.speed} m/s</p>
            </div>
            <div className="forecast-details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="details-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#f5f5f5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
              </svg>
              <p className="details-description">Clouds</p>
              <p className="details-data">{day.clouds.all}%</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WeatherForecastDetails;
