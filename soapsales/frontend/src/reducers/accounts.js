import {
    ADD_ACCOUNT,
    GET_ACCOUNTS ,
    DELETE_ACCOUNT,
    GET_ACCOUNT,
    EDIT_ACCOUNT,


} from '../types/accountTypes';

const initialState = {
    accounts: [],
    account: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                account: state.accounts.filter(account=> account.id !== action.payload)
            };
        case ADD_ACCOUNT:
            return {
                ...state,
                account: [...state.accounts, action.payload]
            }
        case GET_ACCOUNT:
            return {
                ...state,
                account:action.payload
                };
        case EDIT_ACCOUNT:
            const arrayList = state.accounts;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                accounts: arrayList,
            };
        default:
            return state;
    }
}
