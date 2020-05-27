import {
  SET_ADDRESS,
  SET_COORDINATES,
  SET_LOADING,
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
    default:
      return state;
  }
};
