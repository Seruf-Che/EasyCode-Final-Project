import React from "react";
import {connect} from "react-redux";
import {closeModal, setUser, logoutUser} from "../../actions/";
import ModalLogin from "./modal-login";
import ModalSignin from "./modal-signin";
import ModalCofirm from "./modal-confirm";

const Modal = ({modal, close, setUser, signinUser, logoutUser, removeUser}) => {
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
      return <ModalCofirm
              close={close}
              callback={logoutUser}
              text="Are you sure you want to log out?"/>
    case("accountDeletingConfirm"):
      return <ModalCofirm
              close={close}
              callback={() => {
                removeUser();
                logoutUser();
              }}
              text="Are you sure you want to delete your account?"/>
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
    logoutUser: () => dispatch(logoutUser()),
    removeUser: () => dispatch(logoutUser())//CUSTOMIZE THE FUNCTION
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Modal);
