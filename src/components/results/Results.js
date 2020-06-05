import React, { Fragment, useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

import CurrentWeather from "./CurrentWeather";
import LocationInfo from "./LocationInfo";

const Results = () => {
  const resultsContext = useContext(ResultsContext);
  const { searchable, coordinates, resultsDisplayed } = resultsContext;

  return (
    <Fragment>
      {resultsDisplayed ? (
        <div className="card mb-3" hidden={searchable}>
          <div className="card-header text-center">
            <strong>Coordinates</strong>
          </div>
          <div className="card-body">
            <p hidden={searchable}>
              <strong>Latitude: </strong>
              {coordinates.lat.toFixed(2)}
            </p>
            <p hidden={searchable}>
              <strong>Longitude: </strong>
              {coordinates.lng.toFixed(2)}
            </p>
          </div>
        </div>
      ) : null}
      {resultsDisplayed ? (
        <div className="card mb-3" hidden={searchable}>
          <div className="card-header text-center">
            <strong>Current Weather</strong>
          </div>
          <div className="card-body">
            <CurrentWeather />
          </div>
        </div>
      ) : null}
      {resultsDisplayed ? (
        <div className="card mb-3" hidden={searchable}>
          <div className="card-header text-center">
            <strong>Location Information</strong>
          </div>
          <div className="card-body">
            <LocationInfo />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Results;
