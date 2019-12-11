export const setUser = (payload) => {
  return {
    type: "SUCCESS_LOGIN",
    payload
  }
}

export const signinUser = (payload) => {
  return {
    type: "SUCCESS_SIGNIN",
    payload
  }
}

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
