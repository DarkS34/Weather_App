import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherNowDetails from "../../components/WeatherNowDetails/WeatherNowDetails";
import { citiesToSearch } from "../../Constants/CitiesToSearch";

import { ApiKey } from "../../Constants/ApiKey";
import Loading from "../../components/Loading/Loading";

const WeatherNowOtherCities = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSelectChange = (ev) => {
    setCity(ev.target.value);
  };

  useEffect(() => {
    (async () => {
      setWeatherData(null);
      try {
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
        setError("Error when fetching data");
      }
    })();
  }, [city]);

  return (
    <>
      <label className="select-cities" htmlFor="cities">
        Select a city:
        <select name="cities" id="cities" onChange={handleSelectChange}>
          {citiesToSearch.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>
      {error ? (
        <p>{error}</p>
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

export default WeatherNowOtherCities;
