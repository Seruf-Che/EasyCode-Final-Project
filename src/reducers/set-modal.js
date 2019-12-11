const setModal = (state, action) => {
  if (state === undefined) {
    return {}
  }
  
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return {
        isLoginModal: true
      };
    case "OPEN_SIGNIN_MODAL":
      return {
        isSigninModal: true
      };
    case "CLOSE_MODAL":
      return {};
    default:
      return state.modal;
  }
}
export default setModal;