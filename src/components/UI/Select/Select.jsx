import React from 'react';
import classes from "./Select.module.css"

const Select = (props) => {

    return (
      <select
        className={classes.select}
        onChange={e => props.setTitle(e.target.value)}
        defaultValue={""}
      >
          <option value="">Должность</option>
          <option value="driver" >Водитель</option>
          <option value="waiter">Официант</option>
          <option value="cook">Повар</option>
      </select>
    );
};

export default Select;