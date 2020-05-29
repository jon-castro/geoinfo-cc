import React, { useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

const Results = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    coordinates,
    currentWeather,
    getCurrentWeather,
    loading,
    displayable,
    setDisplayable,
  } = resultsContext;

  const onChange = (displayable) => {
    if (displayable) {
      getCurrentWeather(coordinates.lat, coordinates.lng);
    }
  };

  return (
    <div>
      {displayable ? (
        <p onChange={onChange(displayable)}>
          {currentWeather.name} -
          {
            JSON.stringify(currentWeather.weather, ["description"])
          }
        </p>
      ) : (
        " "
      )}
    </div>
  );
};

export default Results;
