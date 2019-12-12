import React from "react";

const Section = ({children, heading}) => {
  return(
    <section className="section">
      <div className="section__inner">
        {heading ? <h1 className="section__heading">{heading}</h1> : ""}
        {children}
      </div>
    </section>
  )
}

export default Section;