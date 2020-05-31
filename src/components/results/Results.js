import React, { useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

import CurrentWeather from "./CurrentWeather";

const Results = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    searchable,
  } = resultsContext;

  return (
    <div className="card" hidden={searchable}>
      <div className="card-header">Current Weather</div>
      <div className="card-body"> Text here... <CurrentWeather /></div>
    </div>
  );
};

export default Results;
