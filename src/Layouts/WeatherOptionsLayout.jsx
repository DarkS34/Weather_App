import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./WeatherOptionsLayout.css";

const WeatherOptionsLayout = () => {
  return (
    <>
      <header id="site-header">
        <h1 className="site-title">Weather App</h1>
        <nav className="navbar">
          <div className="weather-now navlink-container">
            <NavLink className="opt-navlink" to="/">
              <p className="time-opt">Weather Now</p>
              <p className="location-opt">My Location</p>
            </NavLink>
            <NavLink className="opt-navlink" to="weather-now-other-cities">
              <p className="time-opt">Weather Now</p>
              <p className="location-opt">Other Cities</p>
            </NavLink>
          </div>
          <div className="weather-forecast navlink-container">
            <NavLink className="opt-navlink" to="weather-forecast-my-location">
              <p className="time-opt">Weather Forecast</p>
              <p className="location-opt">My Location</p>
            </NavLink>
            <NavLink className="opt-navlink" to="weather-forecast-other-cities">
              <p className="time-opt">Weather Forecast</p>
              <p className="location-opt">Other Cities</p>
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
    </>
  );
};

export default WeatherOptionsLayout;
