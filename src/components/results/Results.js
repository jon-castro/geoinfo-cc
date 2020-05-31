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
  } = resultsContext;

  // const onChange = (loading) => {
  //   if (loading) {
  //     getCurrentWeather(coordinates.lat, coordinates.lng);
  //     getCurrentWeatherConditions(coordinates.lat, coordinates.lng);
  //   }
  // };

  return (
    <div>

    </div>
  );
};

export default Results;
