import React, { useReducer } from "react";
import axios from "axios";
import ResultsContext from "./resultsContext";
import ResultsReducer from "./resultsReducer";
import { SET_ADDRESS, SET_COORDINATES, SET_LOADING } from "../types";

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

  //Get selected location from the PlacesAutocomplete component:
  const setAddress = (value) => {
    dispatch({
      type: SET_ADDRESS,
      payload: value,
    });
  };

  //Set coordinates from the selected location:
  const setCoordinates = (value) => {
    dispatch({
      type: SET_COORDINATES,
      payload: value,
    });
  };

  // Clear field (use in conjunction with a Search clear function?)

  // Set loading (component loading, separate from the search dropdown "Loading...")

  return (
    <ResultsContext.Provider
      value={{
        address: state.address,
        coordinates: state.coordinates,
        loading: state.loading,
        setAddress,
        setCoordinates,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
