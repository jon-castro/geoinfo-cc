import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchCities, showClear, clearCities, citiesList }) => {
  const [query, setQuery] = useState('');

  return <div></div>;
};

Search.propTypes = {
  searchCities: PropTypes.func.isRequired,
  citiesList: PropTypes.array.isRequired,
  clearCities: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
