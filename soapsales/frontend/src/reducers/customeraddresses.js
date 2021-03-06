import {
    ADD_CUSTOMER_ADDRESS,
    GET_CUSTOMER_ADDRESSES ,
    DELETE_CUSTOMER_ADDRESS,
    GET_CUSTOMER_ADDRESS,
    EDIT_CUSTOMER_ADDRESS
} from '../types/customeraddressTypes';

const initialState = {
    customeraddresses: [],
    customeraddress: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CUSTOMER_ADDRESSES:
            return {
                ...state,
                customeraddresses: action.payload
            };
        case DELETE_CUSTOMER_ADDRESS:
            return {
                ...state,
                customeraddress: state.customeraddresses.filter(customeraddress=> customeraddress.id !== action.payload)
            };
        case ADD_CUSTOMER_ADDRESS:
            return {
                ...state,
                customeraddress: [...state.customeraddresses, action.payload]
            }
        case GET_CUSTOMER_ADDRESS:
            return {
                ...state,
                customeraddress:action.payload
                };
        case EDIT_CUSTOMER_ADDRESS:
            const arrayList = state.customeraddresses;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                customeraddresses: arrayList,
            };
        default:
            return state;
    }
}
