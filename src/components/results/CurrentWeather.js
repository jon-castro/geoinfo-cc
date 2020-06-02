import React, { Fragment, useContext } from "react";

import ResultsContext from "../../context/results/resultsContext";

const CurrentWeather = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    searchable,
    coordinates,
    getCurrentWeather,
    currentWeather,
    getCurrentWeatherConditions,
    currentWeatherConditions,
    getCurrentWeatherDescription,
    currentWeatherDescription,
    getCurrentTemperature,
    currentTemperature,
  } = resultsContext;

  const onChangeConditions = (conditions) => {
    if (conditions) {
      getCurrentWeather(coordinates.lat, coordinates.lng);
    }
  };

  const onChangeTemperature = (conditions) => {
    if (conditions) {
      getCurrentTemperature(coordinates.lat, coordinates.lng);
    }
  };

  const getData = () => {
    getCurrentWeatherDescription(coordinates.lat, coordinates.lng);
    getCurrentWeatherConditions(coordinates.lat, coordinates.lng);
  };

  // TODO: Add "Display results" button component to search everything on click, also have a boolean to display card components after display gets values.
  return (
    <Fragment>
      <button
        className="btn btn-success text-center"
        disabled={searchable}
        onClick={getData}
      >
        Display values
      </button>

      {/* <div onChange={onChangeConditions(searchable)}> */}
      <div>
        <b>Conditions:</b>{" "}
        <span
        // onChange={getCurrentWeatherConditions(coordinates.lat, coordinates.lng)}
        >
          {currentWeatherConditions}
        </span>{" "}
        -{" "}
        <span
        // onChange={getCurrentWeatherDescription(
        //   coordinates.lat,
        //   coordinates.lng
        // )}
        >
          {currentWeatherDescription}
        </span>
      </div>
      <br />
      {/* <div onChange={onChangeTemperature(searchable)}>
        <p>{}</p>
      </div> */}
    </Fragment>
  );
};

export default CurrentWeather;
