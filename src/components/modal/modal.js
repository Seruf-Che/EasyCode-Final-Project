import React from "react";
import withService from "../hoc/with-service";
import {connect} from "react-redux";
import {closeModal} from "../../actions/modal";
import {setUser, logoutUser, fetchDeleteUser} from "../../actions/user";

import ModalLogin from "./modal-login";
import ModalSignin from "./modal-signin";
import ModalCofirm from "./modal-confirm";
import ModalInfo from "./modal-info";

const Modal = ({service, modal, close, setUser, logoutUser, deleteUser}) => {
  switch (modal.type) {
    case("info"):
      return <ModalInfo 
               close={close}
               text={modal.text}/>
    case("login"):
      return <ModalLogin
             close={close}
             setUser={setUser}
             service={service}/>
    case("signin"):
      return <ModalSignin
              close={close}
              setUser={setUser}
              service={service}/>
    case("logoutConfirm"):
      return <ModalCofirm
              close={close}
              callback={() => {logoutUser();close();}}
              text="Are you sure you want to log out?"/>
    case("accountDeletingConfirm"):
      return <ModalCofirm
              close={close}
              callback={() => deleteUser(modal.params)}
              text="Are you sure you want to delete your account?"/>
    default:
      return ""
  }
};

const mapStateToProps = ({modal}) => {
  return {modal}
};

const mapStateToDispatch = (dispatch, ownProps) => {
  const {service} = ownProps;
  
  return {
    close: () => dispatch(closeModal()),
    setUser: (user) => dispatch(setUser(user)),
    logoutUser: () => dispatch(logoutUser()),
    deleteUser: ({_id, password}) => fetchDeleteUser(service.deleteUser, _id, password, dispatch)
  }
};

export default 
withService(
  connect(mapStateToProps, mapStateToDispatch)(Modal)
  );
