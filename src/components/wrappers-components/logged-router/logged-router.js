import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

const LoggedRouter = (props) => {
  const {children, path, isLogin, ...rest} = props;

  return(
    <Route
      {...rest}
      render={() => isLogin ? children :
          <Redirect to="/" />
      }
    />
  )
};

const mapStateToProsp = ({user}) => {
  return {
    isLogin: user.isLogin
  }
};

export default connect(mapStateToProsp)(LoggedRouter);
