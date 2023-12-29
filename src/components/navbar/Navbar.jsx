import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to={"/users"}
          >
            Users
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to={"/products"}
          >
            Product
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
