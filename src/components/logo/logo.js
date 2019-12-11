import React from "react";
import logoImg from "./logo.png";
import logoImgx2 from "./logo-x2.png";

const Logo = () => {
  return (
    <div className={"logo"}>
      <img 
        className="logo__img"
        srcSet={`${logoImgx2} 2x, ${logoImgx2} 1.5x, ${logoImg} 1x`} 
        src={logoImg} 
        alt="logo" />
    </div>
  )
}

export default Logo;