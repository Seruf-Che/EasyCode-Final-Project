import React from "react";
import {connect} from "react-redux";
import {closeModal, setUser, signinUser} from "../../actions/";
import ModalLogin from "./modal-login";
import ModalSignin from "./modal-signin";

const Modal = ({modal, close, setUser, signinUser}) => {

  if (modal.isLoginModal) return <ModalLogin close={close} setUser={setUser}/>
  if (modal.isSigninModal) return <ModalSignin close={close} setUser={setUser} signinUser={signinUser}/>
  return ""
}

const mapStateToProps = ({modal}) => {
  return {modal}
}

const mapStateToDispatch = (dispatch) => {
  return {
    close: () => dispatch(closeModal()),
    setUser: (user) => dispatch(setUser(user)),
    signinUser: (user) => dispatch(signinUser(user))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Modal);
