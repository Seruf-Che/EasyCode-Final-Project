import * as actTyps from "../actions/action-types";

const setModal = (state, action) => {
  if (state === undefined) {
    return false
  }

  switch (action.type) {
    case actTyps.OPEN_INFO_MODAL:
      return {
        type: "info",
        text: action.payload
      };
      
    case actTyps.OPEN_LOGIN_MODAL:
      return {
        type: "login"
      };

    case actTyps.OPEN_SIGNIN_MODAL:
      return {
        type: "signin"
      };

    case actTyps.OPEN_LOGOUT_CONFIRM_MODAL:
      return {
        type: "logoutConfirm"
      };

    case actTyps.OPEN_DELETE_CONFIRM_MODAL:
      return {
        type: "accountDeletingConfirm",
        params: action.payload
      }

    case actTyps.CLOSE_MODAL:
      return {};

    default:
      return state.modal;
  }
}
export default setModal;
