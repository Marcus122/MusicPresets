import * as Types from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090/api/v1';

export function getEQs(){
    const request = axios.get(`${ROOT_URL}/equalizers`);
    return {
        type: Types.GET_EQS,
        payload:request
    };
}

export function createEQ(props){
    const request = axios.post(`${ROOT_URL}/equalizers`,props);

    return {
        type: Types.CREATE_EQ,
        payload:request
    }
}

export function updateEQ(props){
    const request = axios.put(`${ROOT_URL}/equalizers/${props._id}`,props);

    return {
        type: Types.CREATE_EQ,
        payload:request
    }
}

export function getEQ(id){
    const request = axios.get(`${ROOT_URL}/equalizers/${id}`);

    return {
        type:Types.GET_EQ,
        payload:request
    }
}

export function deleteEQ(id) {
    const request = axios.delete(`${ROOT_URL}/equalizers/${id}`);

    return{
        type:Types.DELETE_EQ,
        payload:request
    };
}
export function getComps(){
    const request = axios.get(`${ROOT_URL}/compressors`);
    return {
        type: Types.GET_COMPS,
        payload:request
    };
}

export function createComp(props){
    const request = axios.post(`${ROOT_URL}/compressors`,props);

    return {
        type: Types.CREATE_COMP,
        payload:request
    }
}

export function updateComp(props){
    const request = axios.put(`${ROOT_URL}/compressors/${props._id}`,props);

    return {
        type: Types.CREATE_COMP,
        payload:request
    }
}

export function getComp(id){
    const request = axios.get(`${ROOT_URL}/compressors/${id}`);

    return {
        type:Types.GET_COMP,
        payload:request
    }
}

export function deleteComp(id) {
    const request = axios.delete(`${ROOT_URL}/compressors/${id}`);

    return{
        type:Types.DELETE_COMP,
        payload:request
    };
}
export function addMessage(message){
    return{
        type:Types.ADD_MESSAGE,
        payload:message
    }
}

export function clearMessage(){
    return{
        type:Types.RESET_MESSAGE,
        payload:true
    }
}