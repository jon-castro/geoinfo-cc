import React, { useReducer } from "react";
import axios from "axios";
import ResultsContext from "./resultsContext";
import ResultsReducer from "./resultsReducer";
import { GET_SELECTED_LOCATION, GET_COORDINATES, SET_LOADING } from "../types";

const ResultsState = (props) => {
  const initialState = {
    selectedLocation: "",
    coordinates: {
      lat: null,
      lng: null,
    },
    loading: false,
  };

  const [state, dispatch] = useReducer(ResultsReducer, initialState);

  // Get the user selected location

  // Get results coordinates to reuse on other components

  // Clear field (use in conjunction with a Search clear function?)

  // Set loading (component loading, separate from the search dropdown "Loading...")

  return (
    <ResultsContext.Provider
      value={{
        selectedLocation: state.selectedLocation,
        coordinates: state.coordinates,
        loading: false,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
