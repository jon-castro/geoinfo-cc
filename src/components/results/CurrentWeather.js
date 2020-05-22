import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CurrentWeather = ({ city: { id, name, weather } }) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header" key={id}>
          {name}
        </div>
        <div className="card-body">{weather[0].description}</div>
      </div>
      <br />
      <br />
    </Fragment>
  );
};

CurrentWeather.propTypes = {
  city: PropTypes.object.isRequired,
};

export default CurrentWeather;
