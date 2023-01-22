import { ADD_CUSTOMER_DATA_SUCCESS } from "./actionType";

const initialState = {
    customerData : []
};

export const reducer = (state = initialState, {type, payload})=>{
    switch (type){
        case ADD_CUSTOMER_DATA_SUCCESS:
            return {...state};
        default:
            return state;
    }
}