import {setEmployeesCreator} from "./employeesReducer.js";
import {employeesAPI} from "../api/api.js"

export const SET_SORT = 'SET_SORT'
export const GET_INITIAL = 'GET_INITIAL'
export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
    initial: false,
    sortName: "name"
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            if (action.isInit === state.initial) {
                return state
            }
            return {
                ...state,
                initial: action.isInit
            }
        }
        case SET_SORT: {
            return {
                ...state,
                sortName: action.sortName
            }
        }
        default:
            return state
    }
}


export const initializedSuccess = (isInit) => {
    return {type: INITIALIZED_SUCCESS, isInit}
}

export const setSort = (sortName) => {
    return {
        type: SET_SORT,
        sortName
    }
}


const getEmpl = (dispatch, callback) => {
    dispatch(initializedSuccess(false))

    callback().then(result => {
        dispatch(setEmployeesCreator(result))
        dispatch(initializedSuccess(true))
    })
}

export const getEmployeesForName = () => {
    return (dispatch) => {
        getEmpl(dispatch, employeesAPI.getEmployeesSortName)
    }
}

export const getEmployeesForDate = () => {
    return (dispatch) => {
        getEmpl(dispatch, employeesAPI.getEmployeesSortBirthday)
    }
}


export default appReducer