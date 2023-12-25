import {applyMiddleware, combineReducers, createStore} from "redux";
import employeesReducer from "./employeesReducer.js";
import appReducer from "./appReducer.js";
import {thunk} from "redux-thunk";


const reducers = combineReducers({
    employees : employeesReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store