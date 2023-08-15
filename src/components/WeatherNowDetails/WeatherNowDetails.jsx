import React from "react";

import "./WeatherNowDetails.css";

const WeatherNowDetails = ({ data }) => {
  const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const currentDate = new Date(Date.now());
  currentDate.setHours(currentDate.getHours() + 2);

  return (
    <div className="weather-today-container">
      <div className="weather-today-card">
        <div className="date-time-container">
          <p className="time">{currentDate.toISOString().slice(11, 16)}</p>
          <p className="date">
            {currentDate
              .toISOString()
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("/")}
          </p>
        </div>
        <div className="basic-info">
          <img
            src={weatherIcon}
            alt={data.weather[0].description}
            className="weather-img"
          />
          <div className="city-description-temp-container">
            <h1 className="city-name">
              {data.name}, {data.sys.country}
            </h1>
            <p className="weather-description">{data.weather[0].description}</p>
            <div className="temp-container">
              <p className="temp">{Math.round(data.main.temp)}</p>
              <p className="degree">ºC</p>
            </div>
          </div>
        </div>
        <div className="weather-now-details">
          <div className="details-container feels-like-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="details-icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#f5f5f5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <path d="M10 9l4 0" />
            </svg>
            <p className="details-description">Feels like</p>
            <p className="details-data">{Math.round(data.main.feels_like)}ºC</p>
          </div>
          <div className="details-container wind-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="details-icon"
              width="36"
              height="36"
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
            <p className="details-description">Wind speed</p>
            <p className="details-data">{data.wind.speed} m/s</p>
          </div>
          <div className="details-container clouds-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="details-icon"
              width="36"
              height="36"
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
            <p className="details-description">Cloudiness</p>
            <p className="details-data">{data.clouds.all}%</p>
          </div>
          <div className="details-container humidity-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="details-icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#f5f5f5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
            </svg>
            <p className="details-description">Humidity</p>
            <p className="details-data">{data.main.humidity}%</p>
          </div>
          <div className="details-container rain-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="details-icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#f5f5f5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
              <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
            </svg>
            <p className="details-description">Rain</p>
            <p className="details-data">{data.rain?.["1h"] || "0"} mm</p>
          </div>
          <div className="details-container rain-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="details-icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#f5f5f5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 4l2 1l2 -1" />
              <path d="M12 2v6.5l3 1.72" />
              <path d="M17.928 6.268l.134 2.232l1.866 1.232" />
              <path d="M20.66 7l-5.629 3.25l.01 3.458" />
              <path d="M19.928 14.268l-1.866 1.232l-.134 2.232" />
              <path d="M20.66 17l-5.629 -3.25l-2.99 1.738" />
              <path d="M14 20l-2 -1l-2 1" />
              <path d="M12 22v-6.5l-3 -1.72" />
              <path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
              <path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
              <path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
              <path d="M3.34 7l5.629 3.25l2.99 -1.738" />
            </svg>
            <p className="details-description">Snow</p>
            <p className="details-data">{data.snow?.["1h"] || "0"} mm</p>
          </div>
        </div>
      </div>
      <div className="clouds-container">
        <span className="cloud"></span>
        <span className="cloud"></span>
      </div>
    </div>
  );
};

export default WeatherNowDetails;
