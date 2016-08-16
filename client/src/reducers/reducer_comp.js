import {GET_COMPS, GET_COMP, CREATE_COMP, UPDATE_COMP, DELETE_COMP } from '../actions/types';

const INITIAL_STATE = { all:[],selected:null};

export default function(state = INITIAL_STATE, action) {
    if(action.error) return state;
    switch(action.type){
        case GET_COMP:
            return {...state,selected:action.payload.data};
        case GET_COMPS:
            return { ...state, all:action.payload.data };
        case UPDATE_COMP:
            return {...state,selected:action.payload.data};
        case DELETE_COMP:
            return {...state,selected:null};
        case CREATE_COMP:
            return {...state,selected:action.payload.data};
    }
    return state;
}