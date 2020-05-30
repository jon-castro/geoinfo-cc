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
  GET_CURRENT_WEATHER_CONDITIONS,
  CLEAR_FIELDS,
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
    currentWeatherConditions: "",
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

  // Get a string detailing the current weather conditions for the selected location:
  const getCurrentWeatherConditions = async (lat, lng) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherMapApiKey}`
    );

    let conditionsText = JSON.stringify(res.data.weather, ["description"]);
    conditionsText = conditionsText.slice(17, -3);
    conditionsText = conditionsText.toString();

    dispatch({
      type: GET_CURRENT_WEATHER_CONDITIONS,
      payload: conditionsText,
    });
  };

  // Clear field (use in conjunction with a Search clear function?

  // Set displayable (user selected search location and coordinates are ready for use)
  const setDisplayable = () => dispatch({ type: SET_DISPLAYABLE });

  // Set loading (component loading, separate from the search dropdown "Loading...")
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear fields when performing a new search
  const clearFields = () => dispatch({ type: CLEAR_FIELDS });

  return (
    <ResultsContext.Provider
      value={{
        address: state.address,
        coordinates: state.coordinates,
        displayable: state.displayable,
        loading: state.loading,
        currentWeather: state.currentWeather,
        currentWeatherConditions: state.currentWeatherConditions,
        setAddress,
        setCoordinates,
        setDisplayable,
        setLoading,
        getCurrentWeather,
        getCurrentWeatherConditions,
        clearFields,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
