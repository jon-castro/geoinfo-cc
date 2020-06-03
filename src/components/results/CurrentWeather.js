import React, { Fragment, useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

const CurrentWeather = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    resultsDisplayed,
    currentWeather,
    currentWeatherConditions,
    currentWeatherDescription,
    getCurrentTemperature,
    currentTemperature,
  } = resultsContext;

  return (
    <Fragment>
      <div>
        <b>Conditions:</b> <span>{currentWeatherConditions}</span> -{" "}
        <span>{currentWeatherDescription}</span>
      </div>
      <br />
    </Fragment>
  );
};

export default CurrentWeather;
