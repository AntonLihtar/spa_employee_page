import './App.css'
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";

import {getEmployeesForDate, getEmployeesForName} from "./redux/appReducer.js";
import Home from "../src/components/Home/Home.jsx"
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import EmployeeProfileContainer from "./components/EmployeeProfile/EmployeeProfileContainer.jsx";
import Header from "./components/Header/Header.jsx";


/* eslint-disable react/prop-types */
const App = (props) => {

    const sortN = props.app.sortName
    useEffect(() => {

        if (sortN === 'birthday') {
            props.sortArrForBirthday()
        } else {
            props.sortArrForName()
        }

    }, [sortN]);

    return (
      <div>
          <Header/>
          <div className={"appWrapper"}>

              <Routes>
                  <Route
                    path="/"
                    element={<div className={"homePage"}>Тут должна быть главная страница...</div>}
                  />
                  <Route
                    path="/employee"
                    element={<Home/>}
                  />
                  <Route
                    path="/employee/:id"
                    element={<EmployeeProfileContainer/>}
                  />
                  <Route
                    path="*"
                    element={<ErrorPage/>}
                  />
              </Routes>
          </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sortArrForName: () => {
            dispatch(getEmployeesForName())
        },
        sortArrForBirthday: () => {
            dispatch(getEmployeesForDate())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
