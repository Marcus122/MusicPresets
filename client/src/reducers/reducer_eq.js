import {GET_EQS, GET_EQ, CREATE_EQ, UPDATE_EQ, DELETE_EQ } from '../actions/types';

const INITIAL_STATE = { all:[],selected:null};

export default function(state = INITIAL_STATE, action) {
    if(action.error) return state;
    switch(action.type){
        case GET_EQ:
            return {...state,selected:action.payload.data};
        case GET_EQS:
            return { ...state, all:action.payload.data };
        case UPDATE_EQ:
            return {...state,selected:action.payload.data};
        case DELETE_EQ:
            return {...state,selected:null};
        case CREATE_EQ:
            return {...state,selected:action.payload.data};
    }
    return state;
}