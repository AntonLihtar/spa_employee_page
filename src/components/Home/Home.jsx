import React from 'react';
import Sort from "../Sort/Sort.jsx";
import Filter from "../Filter/Filter.jsx";
import Preloader from "../common/Preloader.jsx";
import EmployeesContainer from "../Employees/EmployeesContainer.jsx";
import classes from "./Home.module.css"
import {setSort} from "../../redux/appReducer.js";
import {connect} from "react-redux";

const Home = (props) => {
    return (
      <div>
          <div className={classes.header}>
              <div className={classes.title}>Список сотрудников</div>
              <Sort sortName={props.app.sortName} setSortName={props.setSortName}/>
          </div>
          <div className={classes.content}>
              <Filter/>
              {!props.app.initial
                ? <Preloader/>
                : <EmployeesContainer/>
              }
          </div>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
        app: state.app,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        setSortName: (sortName) => {
            dispatch(setSort(sortName))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);