import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../App";
import Loading from "../../components/Loading/Loading";
import WeatherForecastDetails from "../../components/WeatherForecastDetails/WeatherForecastDetails";
import { ApiKey } from "../../Constants/ApiKey";

const WeatherForecastHere = () => {
  const [weatherData, setWeatherData] = useState(null);
  const location = useContext(LocationContext);

  useEffect(() => {
    if (location) {
      (async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${ApiKey}&units=metric`
          );
          setWeatherData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      })();
    }
  }, [location]);

  return (
    <div>
      {!location ? (
        <div className="loading-container">
          <Loading />
          <p className="error-geo">Please, enable geolocation</p>
        </div>
      ) : !weatherData ? (
        <div className="loading-container">
          <Loading />
          <p className="loading-data">Fetching data</p>
        </div>
      ) : (
        <WeatherForecastDetails data={weatherData} />
      )}
    </div>
  );
};

export default WeatherForecastHere;
