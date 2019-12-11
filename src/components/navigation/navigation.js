import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return(
    <nav className={"navigation"}>
      <ul className={"navigation__menu"}>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/">Iphone</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/">Ipad</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/">MacBook</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/">IMac</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/">Accessories</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/">Apple Watch</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;

//li.navigation__item*6>Navlink.navigation__link[to=""]>{item$}