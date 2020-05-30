import {
  SET_ADDRESS,
  SET_COORDINATES,
  SET_DISPLAYABLE,
  SET_LOADING,
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_CONDITIONS,
  CLEAR_FIELDS,
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
        loading: false,
      };
    case CLEAR_FIELDS:
      return {
        ...state,
        displayable: false,
        loading: false,
        currentWeather: [],
        currentWeatherConditions: "",
      };
    case SET_DISPLAYABLE:
      return {
        ...state,
        displayable: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
