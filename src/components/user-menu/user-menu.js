import React from "react";
import {connect} from "react-redux";
import {logoutUser, setUserModal} from "../../actions/";

const UserMenu = ({user, setUserModal, logout, isFooter}) => {
  return (
    <div className={"user-menu"}>
      {
        user.isLogin ?
          <>
            {isFooter ? "" : <span>Hello <span className={"user-menu__name"}>{user.first_name}</span></span>}
            <button onClick={logout} className={"user-menu__button"}>LogOut</button>
          </>
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

export default connect(mapStateToProps, mapStateToDispatch)(UserMenu);
