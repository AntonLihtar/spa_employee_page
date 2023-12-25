import React from 'react';
import classes from "./Employee.module.css";
import {Link} from "react-router-dom";
import {roles} from "../../assets/roles.js";

const Employee = ({index, id, name, role, phone}) => {


    const num = `${index + 1}`.padStart(2, '0')
    return (

      <div className={classes.wrapper}>
          <div className={classes.block}>
              <div className={classes.number}>{num}.</div>
              <div>
                  <Link to={`/employee/${id}`}>
                      <div className={classes.blue}>{name}</div>
                  </Link>
                  <div className={classes.role}>{roles[role]}</div>
              </div>
          </div>
          <div className={classes.blue}>{phone}</div>
      </div>

    );
};

export default Employee;