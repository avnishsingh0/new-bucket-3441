import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { reducer as AppReducer } from "./AppReducer/product/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer"
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./AppReducer/Cart/reducer";
import { reducer as paymentReducer } from "./AppReducer/PaymentDetails/reducer"

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

const rootReducer = combineReducers({ AppReducer, authReducer, cartReducer, paymentReducer });

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
