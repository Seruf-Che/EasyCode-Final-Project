import * as actTyps from "./action-types";
import {setUserModal} from "./modal.js";

export const setUser = (payload) => {
  return {
    type: actTyps.SUCCESS_LOGIN,
    payload
  }
}

export const logoutUser = () => {
  return {
    type: actTyps.SUCCESS_LOGOUT
  }
}

export const fetchDeleteUser = (deleteUserService, _id, password, dispatch) => {
  deleteUserService(_id, password)
    .then((response) => {
      if (response.status !== "-1") return dispatch(logoutUser());

      dispatch(setUserModal(actTyps.OPEN_INFO_MODAL, response.reason));
  })
}

export const updateUser = (payload) => {
  return {
    type: actTyps.UPDATE_USER,
    payload
  }
}