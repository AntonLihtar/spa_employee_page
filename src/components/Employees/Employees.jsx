import React from 'react';
import classes from "./Employees.module.css"
import Employee from "../Employee/Employee.jsx";



const Employees = (props) => {
    return (
      <div className={classes.wrapper}>
          {props.employees.map((e, index) => {
              return <Employee
                key={e.id}
                id={e.id}
                index={index}
                name={e.name}
                role={e.role}
                phone={e.phone}/>
          })}
      </div>
    );
};

export default Employees;