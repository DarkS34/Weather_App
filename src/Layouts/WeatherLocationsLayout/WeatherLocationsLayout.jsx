import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./WeatherLocationsLayout.css"
const WeatherLocationsLayout = () => {
  return (
    <>
      <nav className="location-selection-container">
        <NavLink className="location-opt-navlink" to="here">
          My Location
        </NavLink>
        <NavLink className="location-opt-navlink" to="other-cities">
          Other Cities
        </NavLink>
      </nav>

      <main className="site-main">
        <Outlet />
      </main>
    </>
  );
};

export default WeatherLocationsLayout;
