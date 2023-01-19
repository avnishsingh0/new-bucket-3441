import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

export const getProductsSuccess = (payload) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getProductsFailure = () => {
  return {
    type: GET_PRODUCTS_FAILURE,
  };
};

export const getProducts = (payload) => (dispatch) => {
  dispatch(getProductsRequest());
  return axios
    .get("http://localhost:8080/products")
    .then((r) => {
      dispatch(getProductsSuccess(r.data));
    })
    .catch(() => {
      dispatch(getProductsFailure());
    });
};
