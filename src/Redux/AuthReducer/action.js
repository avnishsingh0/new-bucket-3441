//Write the ActionCreator functions here
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./actionTypes"
import axios from "axios"


const signup = (userObj) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
        const res = await axios.post("http://localhost:8080/user", userObj);
        console.log(res.data);
        dispatch({ type: SIGNUP_SUCCESS });
    } catch (e) {
        dispatch({ type: SIGNUP_FAILURE });
        // console.log(e.res)
    }
};
export { signup }

