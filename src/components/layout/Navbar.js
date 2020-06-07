import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ iconGlobe, iconInfo, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1 className=""><i className={iconGlobe} /><i className={iconInfo} /> {title}</h1>
      <ul className="list-unstyled pt-3">
        <li className="d-inline">
          <Link className="text-dark pr-2" to='/'>Home</Link>
        </li>
        <li className="d-inline">
          <Link className="text-dark" to='/about'>About</Link>
        </li>
      </ul>
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
