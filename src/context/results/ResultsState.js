import React, { useReducer } from "react";
import axios from "axios";
import ResultsContext from "./resultsContext";
import ResultsReducer from "./resultsReducer";
import {
  SET_ADDRESS,
  SET_COORDINATES,
  SET_DISPLAYABLE,
  SET_LOADING,
  GET_CURRENT_WEATHER,
} from "../types";

let openWeatherMapApiKey = process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP;

const ResultsState = (props) => {
  const initialState = {
    address: "",
    coordinates: {
      lat: null,
      lng: null,
    },
    displayable: false,
    loading: false,
    currentWeather: [],
  };

  const [state, dispatch] = useReducer(ResultsReducer, initialState);

  // Get selected location from the PlacesAutocomplete component:
  const setAddress = (value) => {
    dispatch({
      type: SET_ADDRESS,
      payload: value,
    });
  };

  // Set coordinates from the selected location:
  const setCoordinates = (value) => {
    dispatch({
      type: SET_COORDINATES,
      payload: value,
    });
  };

  // Get current weather information from the OpenWeatherMap API:
  const getCurrentWeather = async (lat, lng) => {
    // setLoading();

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherMapApiKey}`
    );

    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data,
    });
  };

  // Clear field (use in conjunction with a Search clear function?)

  // Set displayable (user selected search location and coordinates are ready for use)
  const setDisplayable = () => dispatch({ type: SET_DISPLAYABLE });

  // Set loading (component loading, separate from the search dropdown "Loading...")
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ResultsContext.Provider
      value={{
        address: state.address,
        coordinates: state.coordinates,
        displayable: state.displayable,
        loading: state.loading,
        currentWeather: state.currentWeather,
        setAddress,
        setCoordinates,
        setDisplayable,
        setLoading,
        getCurrentWeather,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
