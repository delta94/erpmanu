import {
        ADD_TAX,
        GET_TAXES,
        DELETE_TAX,
        EDIT_TAX
    } from '../types/taxTypes';

const initialState = {
    taxes: [],
    tax: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TAXES:
            return {
                ...state,
                taxes: action.payload
            };
        case DELETE_TAX:
            return {
                ...state,
                tax: state.taxes.filter(tax=> tax.id !== action.payload)
            };
        case ADD_TAX:
            return {
                ...state,
                tax: [...state.taxes, action.payload]
            };
        case EDIT_TAX:
            return {
                ...state,
                tax: [...state.taxes, action.payload]
            };
        default:
            return state;
    }
}
