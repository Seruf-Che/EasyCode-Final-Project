const setModal = (state, action) => {
  if (state === undefined) {
    return false
  }
  
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return "login";
      
    case "OPEN_SIGNIN_MODAL":
      return "signin";
      
    case "OPEN_LOGOUT_CONFIRM_MODAL":
      return "logoutConfirm";
      
    case "CLOSE_MODAL":
      return {};
      
    default:
      return state.modal;
  }
}
export default setModal;