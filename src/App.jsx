import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import WeatherOptionsLayout from "./Layouts/WeatherOptionsLayout";
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
        <Route path="/" element={<WeatherOptionsLayout />}>
          <Route index path="/" element={<WeatherNowHere />} />
          <Route
            path="weather-now-other-cities"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <LazyWeatherNowOtherCities />
              </Suspense>
            }
          />

          <Route
            path="weather-forecast-my-location"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <LazyWeatherForecastHere />
              </Suspense>
            }
          />
          <Route
            path="weather-forecast-other-cities"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <LazyWeatherForecastOtherCities />
              </Suspense>
            }
          />
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
