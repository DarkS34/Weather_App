import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import WeatherLocationsLayout from "./Layouts/WeatherLocationsLayout/WeatherLocationsLayout";
import WeatherTimeIntervalOptions from "./Layouts/WeatherTimeIntervalLayout/WeatherTimeIntervalLayout";
import WeatherNowHere from "./pages/WeatherNow/WeatherNowHere";

const LazyWeatherNowOtherCities = lazy(() =>
  import("./pages/WeatherNow/WeatherNowOtherCities")
);

const LazyWeatherForecastHere = lazy(() =>
  import("./pages/WeatherForecast/WeatherForecastHere")
);

const LazyWeatherForecastOtherCities = lazy(() =>
  import("./pages/WeatherForecast/WeatherForecastOtherCities")
);

const LazyNotFound = lazy(() => import("./pages/NotFound"));

import "./App.css";

export const LocationContext = createContext();

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting geolocation:", error.message);
      }
    );
  }, []);

  return (
    <LocationContext.Provider value={location}>
      <Routes>
        <Route path="/" element={<WeatherTimeIntervalOptions />}>
          <Route path="weather-now" element={<WeatherLocationsLayout />}>
            <Route path="here" element={<WeatherNowHere />} />
            <Route
              path="other-cities"
              element={
                <Suspense fallback={<p>Loading ...</p>}>
                  <LazyWeatherNowOtherCities />
                </Suspense>
              }
            />
          </Route>
          <Route path="weather-forecast" element={<WeatherLocationsLayout />}>
            <Route
              path="here"
              element={
                <Suspense fallback={<p>Loading ...</p>}>
                  <LazyWeatherForecastHere />
                </Suspense>
              }
            />
            <Route
              path="other-cities"
              element={
                <Suspense fallback={<p>Loading ...</p>}>
                  <LazyWeatherForecastOtherCities />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <LazyNotFound />
            </Suspense>
          }
        />
      </Routes>
    </LocationContext.Provider>
  );
}

export default App;
