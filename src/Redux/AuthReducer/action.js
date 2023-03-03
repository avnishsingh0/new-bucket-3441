//Write the ActionCreator functions here
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./actionTypes"
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


export const login = (userData) => (disptach) => {
    disptach({ type: LOGIN_REQUEST })
    return axios.get("http://localhost:8080/user", userData).then((res) => {
        console.log(res.data)
        disptach({ type: LOGIN_SUCCESS })
    }).catch((err) => {
        disptach({ LOGIN_ERROR })
    })
}
