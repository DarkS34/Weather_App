import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import "./WeatherTimeIntervalLayout.css";

const WeatherTimeIntervalOptions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("weather-now");
  }, []);

  return (
    <>
      <header id="site-header">
        <h1 className="site-title">Weather App</h1>
        <nav className="navbar">
          <NavLink className="time-opt-navlink" to="weather-now">
            Weather now
          </NavLink>
          <NavLink className="time-opt-navlink" to="weather-forecast">
            Weather forecast
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default WeatherTimeIntervalOptions;
