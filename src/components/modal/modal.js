import React from "react";
import {connect} from "react-redux";
import {setUserModal, closeModal} from "../../actions/";
import ModalLogin from "./modal-login";
import ModalSignin from "./modal-signin";

const Modal = ({modal, close}) => {
  
  if (modal.isLoginModal) return <ModalLogin close={close}/>
  if (modal.isSigninModal) return <ModalSignin close={close}/>
  return ""
}

const mapStateToProps = ({modal}) => {
  return {modal}
}

const mapStateToDispatch = (dispatch) => {
  return {
    close: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Modal);