import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Header.module.css"


const Header = () => {
    return (
      <header className={classes.header}>
          <Link to={"/"}>главная </Link>
          <Link to={"/employee"}>список сотрудников</Link>
      </header>
    );
};

export default Header;