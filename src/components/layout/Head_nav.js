import React from "react";
import { Link } from "react-router-dom";
import classes from "./Head_nav.module.css";
import  logo from "../../img/main_logo.png";  

function Head_nav() {
  return (
    <>
      <header className={classes.header}>
        <img src={logo}></img>
        <div className={classes.header_div}>
        <nav></nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <Link to="/forumes">Forume</Link>
            </li>
          </ul> 
        </div>
      </header>
    </>
  );
}
export default Head_nav;
