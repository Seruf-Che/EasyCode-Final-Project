import React from "react";

import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";
import UserMenu from "../user-menu/user-menu";

const Header = () => {
  return(
    <header className={"header"}>
      <div className={"header__inner"}>
        <Logo />
        <Navigation />
        <UserMenu />
      </div>
    </header>
  )
};

export default Header;