import React, { Fragment } from "react";

const CurrentWeather = (weatherInfo) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          {weatherInfo[0].name}
        </div>
        <div className="card-body">{weatherInfo[0].weather[0].description}</div>
      </div>
      <br />
      <br />
    </Fragment>
  );
};

export default CurrentWeather;
