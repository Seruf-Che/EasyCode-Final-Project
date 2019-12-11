import React from "react";

const Spinner = () => {
  return(
    <div className={"spinner"}>
      <div className={"spinner__inner"}>
        <span className={"spinner__circle"}></span>
        <span className={"spinner__circle spinner__circle--inner"}></span>
      </div>
    </div>
  )
}

export default Spinner;