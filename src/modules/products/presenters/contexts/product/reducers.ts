/* eslint-disable */
import {
  InitialState,
  ActionTypes,
  FIND_MEASUREMENTS,
  FIND_PRODUCTS,
} from "./types";

export const initialState: InitialState = {
  measurements: undefined!,
  products: undefined!,
};

export function reducer(
  state = initialState,
  action: ActionTypes
): InitialState {
  switch (action.type) {
    case FIND_MEASUREMENTS:
      return {
        ...state,
        measurements: action.payload,
      };

    case FIND_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
}
