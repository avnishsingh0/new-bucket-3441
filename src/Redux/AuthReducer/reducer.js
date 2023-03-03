// NOTE: DO NOT MODIFY the intial state structure in this file.
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./actionTypes"

const initialState = {
    isAuth: false,
    token: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SIGNUP_REQUEST:
            return {
                ...state, isLoading: true
            }

        case SIGNUP_SUCCESS:
            return {
                ...state, isLoading: false, token: payload, isAuth: true,
            }
        case SIGNUP_FAILURE:
            return {
                ...state, isError: true, isLoading: false
            }

        case LOGIN_REQUEST:
            return { ...state, isLoading: true }

        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, token: payload, isAuth: true }
        case LOGIN_ERROR:
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
};

export { reducer };


