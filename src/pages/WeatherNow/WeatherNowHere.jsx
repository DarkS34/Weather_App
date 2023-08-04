import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../App";
import Loading from "../../components/Loading/Loading";
import WeatherNowDetails from "../../components/WeatherNowDetails/WeatherNowDetails";
import { ApiKey } from "../../Constants/ApiKey";

const WeatherNowHere = () => {
  const [weatherData, setWeatherData] = useState(null);
  const location = useContext(LocationContext);

  useEffect(() => {
    if (location) {
      (async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${ApiKey}&units=metric`
          );
          setWeatherData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      })();
    }
  }, [location]);

  return (
    <>
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
        <WeatherNowDetails data={weatherData} />
      )}
    </>
  );
};

export default WeatherNowHere;
