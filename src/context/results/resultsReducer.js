import {
  SET_ADDRESS,
  SET_COORDINATES,
  SET_SEARCHABLE,
  SET_UNSEARCHABLE,
  SET_LOADING,
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_CONDITIONS,
  CLEAR_SEARCH,
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
    case SET_SEARCHABLE:
      return {
        ...state,
        searchable: true,
        address: "",
        coordinates: {
          lat: null,
          lng: null,
        },
      };
    case SET_UNSEARCHABLE:
      return {
        ...state,
        searchable: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        displayable: false,
        loading: false,
        currentWeather: [],
        currentWeatherConditions: "",
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
