import React, {useState} from 'react';
import {connect} from "react-redux"
import {setFiltersCreator} from "../../redux/employeesReducer.js";
import classes from "./Filter.module.css";
import Select from "../UI/Select/Select.jsx";
import Radio from "../UI/Radio/Radio.jsx";

const Filter = (props) => {

    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")

    const formOnSubmit = (e) => {
        e.preventDefault()
        props.setFilters({"title": title, "status": status})
    }

    return (
      <div className={classes.wrapper}>
          <div className={classes.title}>Фильтры:</div>
          <form
            onSubmit={formOnSubmit}
          >
              <Select setTitle={setTitle}/>
              <Radio setStatus={setStatus}/>
              <button className={classes.btn}>Применить</button>
          </form>

      </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        setFilters: (payload)=> {
            dispatch(setFiltersCreator(payload))
        }
    }
}


export default connect(null, mapDispatchToProps)(Filter);