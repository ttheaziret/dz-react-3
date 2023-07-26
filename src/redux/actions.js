import { types } from "./types"

export function changeTitleAction () {
    return {
        type: types.CHANGE_TITLE
    }
}
 
export function withParamsAction(title) {
    return {
        type: types.WITH_PARAMS,
        payload: title
    }
}

export function changeInputAction(value) {
    return {
        type: types.VALUE,
        payload: value
    }
}

export function addUserAction (name) {
    return {
        type: types.ADD_USER,
        payload: name
    }
}

export function deleteAllItems () {
    return{
        type: types.DELETE_ALL,
    }
  }

export function addNumber (number) {
    return {
        type: types.ADD_NUMBER,
        payload: number
    }
}  

export function clearList () {
    return {
        type: types.CLEAR_LIST
    }
}
  