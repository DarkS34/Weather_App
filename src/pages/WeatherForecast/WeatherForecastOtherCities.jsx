import React, { useEffect, useState } from "react";
import WeatherForecastDetails from "../../components/WeatherForecastDetails/WeatherForecastDetails";
import { citiesToSearch } from "../../Constants/CitiesToSearch";
import axios from "axios";
import { ApiKey } from "../../Constants/ApiKey";

const WeatherForecastOtherCities = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);

  const [error, setError] = useState(null);

  const handleSelectChange = (ev) => {
    setCity(ev.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ApiKey}&units=metric`
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
      <div>
        {error ? (
          <p>{error}</p>
        ) : !weatherData ? (
          <p>Fetching data ...</p>
        ) : (
          <WeatherForecastDetails data={weatherData} />
        )}
      </div>
    </>
  );
};

export default WeatherForecastOtherCities;
