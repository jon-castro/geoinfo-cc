import React, { Fragment, useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

import CurrentWeather from "./CurrentWeather";

const Results = () => {
  const resultsContext = useContext(ResultsContext);
  const { searchable, resultsDisplayed } = resultsContext;

  return (
    <Fragment>
      {resultsDisplayed ? (
        <div className="card" hidden={searchable}>
          <div className="card-header">Current Weather</div>
          <div className="card-body">
            <CurrentWeather />
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Results;
