import React, { Fragment } from "react";

const CurrentWeather = (props) => {
  const { id, name, weather } = props.city;
  return (
    <Fragment>
      <div className="card">
        <div className="card-header" key={id}>
          {name}
        </div>
        <div className="card-body">{weather[0].description}</div>
      </div>
      <br />
    </Fragment>
  );
};

export default CurrentWeather;
