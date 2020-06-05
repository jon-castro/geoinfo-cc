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

export default (state, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    case GET_CURRENT_WEATHER_CONDITIONS:
      return {
        ...state,
        currentWeatherConditions: action.payload,
      };
    case GET_CURRENT_WEATHER_DESCRIPTION:
      return {
        ...state,
        currentWeatherDescription: action.payload,
      };
    case GET_CURRENT_TEMPERATURE:
      return {
        ...state,
        currentTemperature: action.payload,
      };
    case GET_CURRENT_HUMIDITY:
      return {
        ...state,
        currentHumidity: action.payload,
      };
    case GET_LOCATION_INFO:
      return {
        ...state,
        locationInfo: action.payload,
      };
    case SET_SEARCHABLE:
      return {
        ...state,
        searchable: true,
        resultsDisplayed: false,
        address: "",
        coordinates: {
          lat: null,
          lng: null,
        },
        currentWeather: [],
        currentWeatherConditions: "",
        currentWeatherDescription: "",
        currentTemperature: "",
        currentHumidity: "",
        locationInfo: [],
      };
    case SET_UNSEARCHABLE:
      return {
        ...state,
        searchable: false,
      };
    case SET_RESULTS_DISPLAYED:
      return {
        ...state,
        resultsDisplayed: true,
      };
    default:
      return state;
  }
};
