import axios from 'axios';
import {
        GET_UNVERIFIED_PRODUCTION_PROCESSES,
        DELETE_UNVERIFIED_PRODUCTION_PROCESS,
        GET_UNVERIFIED_PRODUCTION_PROCESS
    } from '../types/unverifiedproductionprocessTypes';
import { unverifiedproductionprocessesURL } from '../constants';
import { ADD_PROCESS } from './types';

// Get
export const getUnverifiedProductionProcesses = () => dispatch => {
    axios.get(unverifiedproductionprocessesURL)
        .then(res => {
            dispatch({
                type: GET_UNVERIFIED_PRODUCTION_PROCESSES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addProcess = (process) => dispatch => {
    axios.post(unverifiedproductionprocessesURL, process)
        .then(res => {
            dispatch({
                type: ADD_PROCESS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


//Delete
export const deleteUnverifiedProductionProcess = (id) => dispatch => {
    axios.delete(unverifiedproductionprocessesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_UNVERIFIED_PRODUCTION_PROCESS,
                payload: id
            });
        }).catch(err => console.log(err))
}

//get
export const getUnverifiedProductionProcess = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/manufacture/unverified-production-processes/${id}`)
        .then(res => {
            dispatch({
                type: GET_UNVERIFIED_PRODUCTION_PROCESS,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


