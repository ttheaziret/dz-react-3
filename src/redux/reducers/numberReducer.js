import { types } from "../types";

const initialState = {
    number: '',
    list: []
}


export default function  numberReducer (state = initialState, action) {
    switch (action.type) {
      case types.ADD_NUMBER:
        return {...state, number: action.payload};
      case types.CLEAR_LIST:
        return {...state, list: []};
      default:
        return state;
    }
  };

