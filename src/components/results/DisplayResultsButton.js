import React, { useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

const DisplayResults = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    searchable,
    coordinates,
    setResultsDisplayed,
    getCurrentWeather,
    getCurrentWeatherDescription,
    getCurrentWeatherConditions,
    getCurrentTemperature,
    getCurrentHumidity,
    getLocationInfo,
  } = resultsContext;

  const onClick = () => {
    getCurrentWeather(coordinates.lat, coordinates.lng);
    getCurrentWeatherConditions(coordinates.lat, coordinates.lng);
    getCurrentWeatherDescription(coordinates.lat, coordinates.lng);
    getCurrentTemperature(coordinates.lat, coordinates.lng);
    getCurrentHumidity(coordinates.lat, coordinates.lng);
    getLocationInfo(coordinates.lat, coordinates.lng, "sport");
    getLocationInfo(coordinates.lat, coordinates.lng, "tourist_facilities");
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
