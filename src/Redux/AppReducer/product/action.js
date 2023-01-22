import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  ADD_TO_CART_SUCCESS,
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

const addToCartSuccess = () => {
  return {type : ADD_TO_CART_SUCCESS}
}

export const getProducts = (payload) => (dispatch) => {
  dispatch(getProductsRequest());
  return axios
    .get("https://caratlane-database.vercel.app/products")
    .then((r) => {
      dispatch(getProductsSuccess(r.data));
    })
    .catch(() => {
      dispatch(getProductsFailure());
    });
};

export const addToCart = (item) => (dispatch) => {
  axios.post("https://caratlane-database.vercel.app/cart",item).then(()=>{
    dispatch(addToCartSuccess(item))
  })
} 
