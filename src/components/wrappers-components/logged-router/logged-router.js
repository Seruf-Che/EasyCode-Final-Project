import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

class LoggedRouter extends React.Component {


  render() {
    const {children, path, isLogin, ...rest} = this.props;
    return(
      <Route
        {...rest}
        render={() => isLogin ? children :
            <Redirect to="/" />
        }
      />
    )
  }
}

const mapStateToProsp = ({user}) => {
  return {
    isLogin: user.isLogin
  }
}

export default connect(mapStateToProsp)(LoggedRouter);
