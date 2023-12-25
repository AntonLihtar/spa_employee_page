import {employeesAPI} from "../api/api.js";

export const SET_EMPLOYEES = 'SET_EMPLOYEES'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    profile: null,
    employees: [],
    filterTitle: '',
    filterStatus: ''
}

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES: {
            return {
                ...state,
                employees: [...action.employees]
            }
        }
        case SET_FILTERS: {
            return {
                ...state,
                filterStatus: action.payload.status,
                filterTitle: action.payload.title
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default :
            return state
    }
}

export const setEmployeesCreator = (employees) => ({type: SET_EMPLOYEES, employees})

export const setFiltersCreator = (payload) => ({type: SET_FILTERS, payload})

export const setProfile = (profile) => ({type: SET_PROFILE, profile})


export const getProfile = (userId) => (dispatch) => {
    employeesAPI.getProfile(userId).then(profile => {
        dispatch(setProfile(profile))
    })
}

export default employeesReducer
