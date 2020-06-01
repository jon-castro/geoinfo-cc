import React, { useReducer } from "react";
import axios from "axios";
import ResultsContext from "./resultsContext";
import ResultsReducer from "./resultsReducer";
import {
  SET_ADDRESS,
  SET_COORDINATES,
  SET_SEARCHABLE,
  SET_UNSEARCHABLE,
  SET_LOADING,
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_CONDITIONS,
  GET_CURRENT_WEATHER_DESCRIPTION,
} from "../types";

let openWeatherMapApiKey = process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP;

const ResultsState = (props) => {
  const initialState = {
    address: "",
    coordinates: {
      lat: null,
      lng: null,
    },
    searchable: true,
    loading: false,
    currentWeather: [],
    currentWeatherConditions: "",
    currentWeatherDescription: "",
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

    let conditionsText = JSON.stringify(res.data.weather, ["main"]);
    conditionsText = conditionsText.slice(10, -3);

    dispatch({
      type: GET_CURRENT_WEATHER_CONDITIONS,
      payload: conditionsText,
    });
  };

  // Get a string detailing the current weather conditions description for the selected location:
  const getCurrentWeatherDescription = async (lat, lng) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherMapApiKey}`
    );

    let conditionsText = JSON.stringify(res.data.weather, ["description"]);
    conditionsText = conditionsText.slice(17, -3);

    dispatch({
      type: GET_CURRENT_WEATHER_DESCRIPTION,
      payload: conditionsText,
    });
  };

  // Set the searchable flag to true (i.e. when clearing a search):
  const setSearchable = () => dispatch({ type: SET_SEARCHABLE });

  // Set the searchable flag to false (i.e. when a location has been selected and data is being displayed):
  const setUnsearchable = () => dispatch({ type: SET_UNSEARCHABLE });

  // Set loading (component loading, separate from the search dropdown "Loading...")
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ResultsContext.Provider
      value={{
        address: state.address,
        coordinates: state.coordinates,
        searchable: state.searchable,
        loading: state.loading,
        currentWeather: state.currentWeather,
        currentWeatherConditions: state.currentWeatherConditions,
        currentWeatherDescription: state.currentWeatherDescription,
        setAddress,
        setCoordinates,
        setSearchable,
        setUnsearchable,
        setLoading,
        getCurrentWeather,
        getCurrentWeatherConditions,
        getCurrentWeatherDescription,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
