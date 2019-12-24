const setModal = (state, action) => {
  if (state === undefined) {
    return false
  }

  switch (action.type) {
    case "OPEN_INFO_MODAL":
      return {
        type: "info",
        text: action.payload
      };
      
    case "OPEN_LOGIN_MODAL":
      return {
        type: "login"
      };

    case "OPEN_SIGNIN_MODAL":
      return {
        type: "signin"
      };

    case "OPEN_LOGOUT_CONFIRM_MODAL":
      return {
        type: "logoutConfirm"
      };

    case "OPEN_DELETE_CONFIRM_MODAL":
      return {
        type: "accountDeletingConfirm",
        params: action.payload
      }

    case "CLOSE_MODAL":
      return {};

    default:
      return state.modal;
  }
}
export default setModal;
