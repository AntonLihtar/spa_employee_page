import React, {useEffect} from 'react';
import {connect} from "react-redux";
import EmployeeProfile from "./EmployeeProfile.jsx";
import {useParams} from "react-router-dom";
import {getProfile} from "../../redux/employeesReducer.js";

const EmployeeProfileContainer = (props) => {

    const id = useParams().id

    useEffect(() => {
            props.setProfileToState(id)
    }, []);

    return (
      <EmployeeProfile {...props.profile}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.employees.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfileToState: (id) => {
            dispatch(getProfile(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeProfileContainer);