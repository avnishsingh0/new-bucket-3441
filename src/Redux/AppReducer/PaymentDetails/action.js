import axios from "axios"
import { ADD_CUSTOMER_DATA_SUCCESS } from "./actionType"

const addCustomerDataSuccess = () => {
    return {type: ADD_CUSTOMER_DATA_SUCCESS};
}

export const addCustomerData = (item) => (dispatch) => {
    axios.post("https://caratlane-database.vercel.app/customerData",item).then(()=>{
        dispatch(addCustomerDataSuccess(item));
    })
}