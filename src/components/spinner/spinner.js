import React from "react";

const Spinner = ({small, fixed}) => {
  return(
    <div className={`spinner ${small ? "spinner--small": ""} ${fixed ? "spinner--fixed": ""}`}>
      <div className={"spinner__inner"}>
        <span className={"spinner__circle"}></span>
        <span className={"spinner__circle spinner__circle--inner"}></span>
      </div>
    </div>
  )
}

export default Spinner;