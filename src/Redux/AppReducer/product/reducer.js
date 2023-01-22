import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: payload, isLoading: false };

    case GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
