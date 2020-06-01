import React, { useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

const CurrentWeather = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    searchable,
    coordinates,
    getCurrentWeather,
    getCurrentWeatherConditions,
    currentWeatherConditions,
    getCurrentWeatherDescription,
    currentWeatherDescription,
  } = resultsContext;

  const onChange = (conditions) => {
    if (conditions) {
      getCurrentWeather(coordinates.lat, coordinates.lng);
    }
  };

  return (
    <div onChange={onChange(searchable)}>
      <b>Conditions:</b>{" "}
      <span
        onLoad={getCurrentWeatherConditions(coordinates.lat, coordinates.lng)}
      >
        {currentWeatherConditions}
      </span>{" "}
      -{" "}
      <span
        onLoad={getCurrentWeatherDescription(coordinates.lat, coordinates.lng)}
      >
        {currentWeatherDescription}
      </span>
    </div>
  );
};

export default CurrentWeather;
