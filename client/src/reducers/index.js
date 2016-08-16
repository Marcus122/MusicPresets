import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/types';
import EQReducer from './reducer_eq';
import CompressorReducer from './reducer_comp';

// Error messages from ajax requests or add a message
function messages(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_MESSAGE) {
    return null;
  } 
  else if(type === ActionTypes.ADD_MESSAGE){
      return action.payload;
  }
  else if (error) {
    let msg = action.payload.response ? action.payload.response.data.message : "Error";
    if(!msg) msg="Error";
    return {
        type:'error',
        message:msg   
    }
  }

  return state;
}

const rootReducer = combineReducers({
    equalizers:EQReducer,
    compressors:CompressorReducer,
    messages:messages
});

export default rootReducer;