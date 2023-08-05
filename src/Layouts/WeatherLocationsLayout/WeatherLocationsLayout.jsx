import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import "./WeatherLocationsLayout.css";

const WeatherLocationsLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("here");
  }, []);

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
