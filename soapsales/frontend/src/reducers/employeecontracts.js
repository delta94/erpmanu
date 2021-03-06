import { ADD_EMPLOYEE_CONTRACT, EDIT_EMPLOYEE_CONTRACT, GET_EMPLOYEE_CONTRACTS, GET_EMPLOYEE_CONTRACT, DELETE_EMPLOYEE_CONTRACT } from '../types/employeecontractTypes';

const initialState = {
    employeecontracts: [],
    employeecontract: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_EMPLOYEE_CONTRACTS:
            return {
                ...state,
                employeecontracts: action.payload
            };
        case DELETE_EMPLOYEE_CONTRACT:
            return {
                ...state,
                employeecontract: state.employeecontracts.filter(employeecontract=> employeecontract.id !== action.payload)
            };
        case ADD_EMPLOYEE_CONTRACT:
            return {
                ...state,
                employeecontracts: [...state.employeecontracts, action.payload]
            }
        case GET_EMPLOYEE_CONTRACT:
            return {
                ...state,
                employeecontract:action.payload
                };
        case EDIT_EMPLOYEE_CONTRACT:
            const arrayList = state.employeecontracts;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                employeecontracts: arrayList,
            };
        default:
            return state;
    }
}
