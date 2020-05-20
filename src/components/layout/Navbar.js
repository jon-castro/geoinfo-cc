import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const Navbar = ({ iconGlobe, iconInfo, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1><i className={iconGlobe} /><i className={iconInfo} /> {title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  iconGlobe: "fas fa-globe",
  iconInfo: "fas fa-info-circle",
  title: "GeoInfo.cc",
};

Navbar.propTypes = {
  iconGlobe: PropTypes.string.isRequired,
  iconInfo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
