import * as actTyps from "../../actions/action-types";

import React from "react";
import {connect} from "react-redux";
import {setUserModal} from "../../actions/modal";
import {Link} from "react-router-dom";

const UserMenu = ({user, setUserModal, logout, isFooter}) => {
  return (
    <div className={"user-menu"}>
      {
        user.isLogin ?
          <>
            {isFooter ? "" : <span>Hello <Link to="/account" className={"user-menu__name"}>{user.first_name}</Link></span>}
            <button onClick={() => setUserModal(actTyps.OPEN_LOGOUT_CONFIRM_MODAL)} className={"user-menu__button"}>LogOut</button>
          </>
        :
          <>
            <button
              onClick={() => setUserModal(actTyps.OPEN_LOGIN_MODAL)}
              className={"user-menu__button"}>Login</button>
            <button
              onClick={() => setUserModal(actTyps.OPEN_SIGNIN_MODAL)}
              className={"user-menu__button"}>SignIn</button>
          </>
      }
    </div>
  )
}

const mapStateToProps = ({user}) => {
  return {user}
}

const mapStateToDispatch = (dispatch) => {
  return {
    setUserModal: (type) => dispatch(setUserModal(type))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(UserMenu);
