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
            to="/">Home</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/category/837382">Iphone</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/category/736726">Ipad</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/category/1">MacBook</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/category/2">IMac</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/category/3">Accessories</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            className="navigation__link"
            activeClassName="navigation__link--current" 
            to="/category/4">Apple Watch</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;