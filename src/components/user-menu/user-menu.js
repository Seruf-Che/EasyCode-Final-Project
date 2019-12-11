import React from "react";
import {connect} from "react-redux";
import {loginUser, logoutUser, setUserModal} from "../../actions/";
import withService from "../hoc/with-service";

const UserMenu = ({user, setUserModal, logout}) => {
  
  return (
    <div className={"user-menu"}>
      {
        user.isLogin ? 
          <button onClick={logout} className={"user-menu__button"}>LogOut</button>
        :
          <>
            <button 
              onClick={() => setUserModal("OPEN_LOGIN_MODAL")} 
              className={"user-menu__button"}>Login</button>
            <button 
              onClick={() => setUserModal("OPEN_SIGNIN_MODAL")} 
              className={"user-menu__button"}>SignIn</button>
          </>
      }
    </div>
  )
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
    setUserModal: (type) => dispatch(setUserModal(type))
  }
}

export default withService(connect(mapStateToProps, mapStateToDispatch)(UserMenu));