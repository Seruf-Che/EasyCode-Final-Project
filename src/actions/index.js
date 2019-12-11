//export const loginUser = () => {
//  return {
//    type: "SUCCESS_LOGIN"
//  }
//}
//
export const logoutUser = () => {
  return {
    type: "SUCCESS_LOGOUT"
  }
}

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  }
}

export const setUserModal = (type) => {
  return {type}
}