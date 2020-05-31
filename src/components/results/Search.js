import React, { Fragment, useContext } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import ResultsContext from "../../context/results/resultsContext";

const Search = () => {
  const resultsContext = useContext(ResultsContext);
  const {
    address,
    setAddress,
    coordinates,
    setCoordinates,
    searchable,
    setSearchable,
    setUnsearchable,
  } = resultsContext;

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    setUnsearchable();
  };



  return (
    <Fragment>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({ placeholder: "Type location" })}
              disabled={!searchable}
            />

            <div>
              {loading ? <div>Loading...</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={suggestion.id}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
              <br />
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>
              <br />
              <button
                className="btn btn-danger"
                onClick={setSearchable}
                hidden={searchable}
              >
                Clear search
              </button>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </Fragment>
  );
};

export default Search;
