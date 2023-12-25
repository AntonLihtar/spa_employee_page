import React from 'react';
import classes from "./Sort.module.css"

const Sort = (props) => {

    let cls = `${classes.sort__item} ${classes.item_bold}`
    return (
      <div className={classes.wrapper}>
          <div className={classes.sort}>Сортировать:</div>
          <div
            onClick={()=> props.setSortName("name")}
            className={props.sortName === "name" ? cls : classes.sort__item}
          >По имени
          </div>
          <div
            onClick={()=> props.setSortName("birthday")}
            className={props.sortName === "birthday" ? cls : classes.sort__item}
          >По дате рождения
          </div>
      </div>
    );
};

export default Sort;