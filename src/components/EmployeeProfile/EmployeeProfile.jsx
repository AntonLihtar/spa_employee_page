import React from 'react';
import classes from "./EmployeeProfile.module.css"
import {roles} from "../../assets/roles.js";

const EmployeeProfile = (props) => {

    let cls = `${classes.circle}`
    if (props.isArchive) {
        cls = `${cls} ${classes.circle_green}`
    } else {
        cls = `${cls} ${classes.circle_red}`
    }

    return (
      <div className={classes.wrapper}>
          <div>имя: <strong>{props.name}</strong></div>
          <div>день рождения:<strong>{props.birthday}</strong></div>
          <div>должность:<strong>{roles[props.role]}</strong></div>
          <div>телефон:<strong>{props.phone}</strong></div>
          <div>id: <strong>{props.id}</strong></div>
          <div>в архиве:<strong><div className={cls}></div></strong></div>
      </div>
    );
};

export default EmployeeProfile;