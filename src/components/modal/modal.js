import React from "react";
import {connect} from "react-redux";
import {closeModal, setUser, signinUser, logoutUser} from "../../actions/";
import ModalLogin from "./modal-login";
import ModalSignin from "./modal-signin";
import ModalLogoutCofirm from "./modal-logout-confirm";

const Modal = ({modal, close, setUser, signinUser, logoutUser}) => {
  switch (modal) {
    case("login"):
      return <ModalLogin
             close={close}
             setUser={setUser}/>
    case("signin"):
      return <ModalSignin 
              close={close}
              setUser={setUser}
              signinUser={signinUser}/>
    case("logoutConfirm"):
      return <ModalLogoutCofirm
              close={close}
              logoutUser={logoutUser}/>
    default:
      return ""
  }
}

const mapStateToProps = ({modal}) => {
  return {modal}
}

const mapStateToDispatch = (dispatch) => {
  return {
    close: () => dispatch(closeModal()),
    setUser: (user) => dispatch(setUser(user)),
    signinUser: (user) => dispatch(signinUser(user)),
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Modal);
