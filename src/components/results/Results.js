import React, { useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

const Results = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    coordinates,
    currentWeather,
    getCurrentWeather,
    currentWeatherConditions,
    getCurrentWeatherConditions,
    loading,
    setLoading,
    displayable,
    setDisplayable,
    clearFields,
  } = resultsContext;

  const onChange = (loading) => {
    if (loading) {
      getCurrentWeather(coordinates.lat, coordinates.lng);
      getCurrentWeatherConditions(coordinates.lat, coordinates.lng);
      setLoading();
    }
  };

  // Function with climate API here?

  return (
    <div>
      {/* {coordinates ? (
        <p onChange={onChange(loading)}>
          {currentWeather.name} - {currentWeatherConditions}
        </p>
      ) : (
        " "
      )} */}
    </div>
  );
};

export default Results;
