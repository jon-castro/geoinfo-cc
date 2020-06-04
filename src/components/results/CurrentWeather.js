import React, { Fragment, useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

const CurrentWeather = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    currentWeatherConditions,
    currentWeatherDescription,
    currentTemperature,
    currentHumidity,
  } = resultsContext;

  return (
    <Fragment>
      <div>
        <p><strong>Conditions: </strong> <span>{currentWeatherConditions}</span> -{" "}
        <span>{currentWeatherDescription}</span></p>
        <p><strong>Temperature: </strong>{currentTemperature}<span>&#8457;</span></p>
        <p><strong>Humidity: </strong>{currentHumidity}%</p>
      </div>
    </Fragment>
  );
};

export default CurrentWeather;
