import React, { useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

const DisplayResults = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    searchable,
    coordinates,
    resultsDisplayed,
    setResultsDisplayed,
    getCurrentWeather,
    getCurrentWeatherDescription,
    getCurrentWeatherConditions,
  } = resultsContext;

  const onClick = () => {
    getCurrentWeather(coordinates.lat, coordinates.lng);
    getCurrentWeatherConditions(coordinates.lat, coordinates.lng);
    getCurrentWeatherDescription(coordinates.lat, coordinates.lng);
    setResultsDisplayed();
  };

  return (
    <div className="text-center">
      <button
        className="btn btn-success"
        hidden={searchable}
        onClick={onClick}
      >
        Display Results
      </button>
    </div>
  );
};

export default DisplayResults;
