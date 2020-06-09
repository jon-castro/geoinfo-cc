import React, { useReducer } from "react";
import axios from "axios";
import ResultsContext from "./resultsContext";
import ResultsReducer from "./resultsReducer";
import {
  SET_ADDRESS,
  SET_COORDINATES,
  SET_SEARCHABLE,
  SET_UNSEARCHABLE,
  SET_RESULTS_DISPLAYED,
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_CONDITIONS,
  GET_CURRENT_WEATHER_DESCRIPTION,
  GET_CURRENT_TEMPERATURE,
  GET_CURRENT_HUMIDITY,
  GET_LOCATION_INFO,
} from "../types";

let openWeatherMapApiKey = process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP;
let openTripMapApiKey = process.env.REACT_APP_API_KEY_OPEN_TRIP_MAP;
let foursquareApiKey = process.env.REACT_APP_FOURSQUARE_API_KEY;
let foursquareApiSecret = process.env.REACT_APP_FOURSQUARE_API_SECRET;

const ResultsState = (props) => {
  const initialState = {
    address: "",
    coordinates: {
      lat: null,
      lng: null,
    },
    searchable: true,
    resultsDisplayed: false,
    currentWeather: [],
    currentWeatherConditions: "",
    currentWeatherDescription: "",
    currentTemperature: "",
    currentHumidity: "",
    locationInfo: [],
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

    let conditionsText = JSON.stringify(res.data.weather[0], ["main"]);
    conditionsText = conditionsText.slice(9, -2);

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

    let conditionsText = JSON.stringify(res.data.weather[0], ["description"]);
    conditionsText = conditionsText.slice(16, -2);

    dispatch({
      type: GET_CURRENT_WEATHER_DESCRIPTION,
      payload: conditionsText,
    });
  };

  // Get the current temperature in K, convert to F and convert to a string:
  const getCurrentTemperature = async (lat, lng) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherMapApiKey}`
    );

    let temperature = res.data.main.temp;
    temperature = temperature * 1.8 - 459.67;
    temperature = temperature.toFixed(2);

    dispatch({
      type: GET_CURRENT_TEMPERATURE,
      payload: temperature,
    });
  };

  // Get the current humidity %
  const getCurrentHumidity = async (lat, lng) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherMapApiKey}`
    );

    let humidity = res.data.main.humidity;

    dispatch({
      type: GET_CURRENT_HUMIDITY,
      payload: humidity,
    });
  };

  // Get location info from OpenTripMap into an object - ORIGINAL OpenTripMap API Call
  // const getLocationInfo = async (lat, lng, locationKind) => {
  //   const res = await axios.get(
  //     `https://api.opentripmap.com/0.1/en/places/radius?lon=${lng}&lat=${lat}&radius=25000&kinds=${locationKind}&format=geojson&apikey=${openTripMapApiKey}`
  //   );

  //   let locationData = res.data.features;
  //   locationData = locationData.filter((location) => {
  //     if (location.properties.name === "") {
  //       return false;
  //     }
  //     return true;
  //   });

  //   dispatch({
  //     type: GET_LOCATION_INFO,
  //     payload: locationData,
  //   });
  // };

  // Get location info from ??? test endpoint
  const getLocationInfo = async (lat, lng, limit = 5) => {
    const res = await axios.get(
      `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=${foursquareApiKey}&client_secret=${foursquareApiSecret}&limit=${limit}&v=20200101`
    );

    let venues = res.data.response.venues;
    console.log(venues);

    dispatch({
      type: GET_LOCATION_INFO,
      payload: venues,
    });
  };

  // Set the searchable flag to true (i.e. when clearing a search):
  const setSearchable = () => dispatch({ type: SET_SEARCHABLE });

  // Set the searchable flag to false (i.e. when a location has been selected and data is being displayed):
  const setUnsearchable = () => dispatch({ type: SET_UNSEARCHABLE });

  // Set displayed flag to fetch and display results items:
  const setResultsDisplayed = () => dispatch({ type: SET_RESULTS_DISPLAYED });

  return (
    <ResultsContext.Provider
      value={{
        address: state.address,
        coordinates: state.coordinates,
        searchable: state.searchable,
        resultsDisplayed: state.resultsDisplayed,
        currentWeather: state.currentWeather,
        currentWeatherConditions: state.currentWeatherConditions,
        currentWeatherDescription: state.currentWeatherDescription,
        currentTemperature: state.currentTemperature,
        currentHumidity: state.currentHumidity,
        locationInfo: state.locationInfo,
        setAddress,
        setCoordinates,
        setSearchable,
        setUnsearchable,
        setResultsDisplayed,
        getCurrentWeather,
        getCurrentWeatherConditions,
        getCurrentWeatherDescription,
        getCurrentTemperature,
        getCurrentHumidity,
        getLocationInfo,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
