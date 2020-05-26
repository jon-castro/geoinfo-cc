import React, { useReducer } from "react";
import axios from "axios";
import ResultsContext from "./resultsContext";
import ResultsReducer from "./resultsReducer";
import { SEARCH_LOCATION, GET_COORDINATES, SET_LOADING } from "../types";

const ResultsState = (props) => {
  const initialState = {
    address: "",
    coordinates: {
      lat: null,
      lng: null,
    },
    loading: false,
  };

  const [state, dispatch] = useReducer(ResultsReducer, initialState);

  // Value of the searched location and coordinates

  // Get coordinates

  // Clear field

  // Set loading

  return (
    <ResultsContext.Provider
      value={{
        address: state.address,
        coordinates: state.coordinates,
        loading: false,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
