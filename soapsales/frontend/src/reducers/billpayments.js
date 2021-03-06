import {
        GET_BILL_PAYMENTS,
        DELETE_BILL_PAYMENT,
        ADD_BILL_PAYMENT,
        GET_BILL_PAYMENT,
        EDIT_BILL_PAYMENT
    } from '../types/billpaymentTypes';

const initialState = {
    billpayments: [],
    billpayment: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BILL_PAYMENTS:
            return {
                ...state,
                billpayments: action.payload
            };
        case DELETE_BILL_PAYMENT:
            return {
                ...state,
                billpayment: state.billpayments.filter(billpayment=> billpayment.id !== action.payload)
            };
        case ADD_BILL_PAYMENT:
            return {
                ...state,
                billpayment: [...state.billpayments, action.payload]
            }
        case GET_BILL_PAYMENT:
            return {
                ...state,
                billpayment:action.payload
                };
        case EDIT_BILL_PAYMENT:
            const arrayList = state.billpayments;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                billpayments: arrayList,
            };
        default:
            return state;
    }
}
