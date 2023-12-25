import React from 'react';
import {connect} from "react-redux";
import Employees from "./Employees.jsx";

const EmployeesContainer = ({employees, filterTitle, filterStatus}) => {


    let emp = [...employees]
    if (filterTitle) {
        emp = employees.filter(e => e.role === filterTitle)
    }

    if (filterStatus) {
        emp = emp.filter(e => e.isArchive.toString() === filterStatus)
    }

    return (
      <Employees employees={emp}/>
    );
};

const mapStateToProps = (state) => {
    const {employees, filterTitle, filterStatus} = state.employees
    return {
        employees,
        filterTitle,
        filterStatus
    }
}


export default connect(mapStateToProps)(EmployeesContainer);