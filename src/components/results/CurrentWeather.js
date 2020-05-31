import React, { Fragment, useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";
import Spinner from "../layout/Spinner";

const CurrentWeather = () => {
  const resultsContext = useContext(ResultsContext);
  const { searchable, coordinates, currentWeather, getCurrentWeather} = resultsContext;

  const onChange = (conditions) => {
    if (conditions) {
      getCurrentWeather(coordinates.lat, coordinates.lng);
    }
  }

  return (
  <p onChange={onChange(searchable)}>{currentWeather.name}</p>
  );
};

export default CurrentWeather;
