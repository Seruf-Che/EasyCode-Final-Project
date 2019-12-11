import React from "react";
import { withRouter } from "react-router";

import bgGif from "./404travolta.gif";

const Page404 = (props) => {
  const {history} = props;
  
  return(
    <div className="page-404" style={{backgroundImage: `url(${bgGif})`}}>
      <div className="page-404__inner">
        <h1 className="page-404__heading">Page was not found 404 :(</h1>
        <button 
          className="page-404__button"
          onClick={() => history.goBack()}>Go back</button>
      </div>
    </div>
  )
}

export default withRouter(Page404);