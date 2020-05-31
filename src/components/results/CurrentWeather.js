import React, { Fragment, useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";
import Spinner from "../layout/Spinner";

const CurrentWeather = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    searchable,
    coordinates,
    currentWeather,
    getCurrentWeather,
    getCurrentWeatherConditions,
    currentWeatherConditions,
  } = resultsContext;

  const onChange = (conditions) => {
    if (conditions) {
      getCurrentWeather(coordinates.lat, coordinates.lng);
    }
  };

  return (
    <div onChange={onChange(searchable)}>
      <p>{currentWeather.name}</p>
      <p onLoad={getCurrentWeatherConditions(coordinates.lat, coordinates.lng)}>
        {currentWeatherConditions}
      </p>
    </div>
  );
};

export default CurrentWeather;
