import React from "react";

import UserMenu from "../user-menu/user-menu";
import Copyright from "../copyright/copyright";

const Footer = () => {
  return(
    <footer className={"footer"}>
      <div className={"footer__inner"}>
        <UserMenu isFooter={true}/>
        <Copyright />
      </div>
    </footer>
  )
};

export default Footer;
