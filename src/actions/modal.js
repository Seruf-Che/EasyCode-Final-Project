import * as actTyps from "./action-types";

export const closeModal = () => {
  return {
    type: actTyps.CLOSE_MODAL
  }
}

export const setUserModal = (type, payload) => {
  switch (type) {
    case (actTyps.OPEN_INFO_MODAL):
      return {type, payload};
    case (actTyps.OPEN_LOGIN_MODAL):
      return {type};
    case (actTyps.OPEN_SIGNIN_MODAL):
      return {type};
    case (actTyps.OPEN_LOGOUT_CONFIRM_MODAL):
      return {type};
    case (actTyps.OPEN_DELETE_CONFIRM_MODAL):
      return {type, payload};
    default:
      throw Error(`There is no such type like ${type}`);
  }
}