const defaultUser = {
  isLogin: false
}

const setUser = (state, action) => {
  if (state === undefined) {
    return defaultUser
  }

  switch (action.type){
    case "SUCCESS_LOGIN":
      return {
        isLogin: true,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        phone: action.payload.phone,
        email: action.payload.email
      };
    case "SUCCESS_LOGOUT":
      return defaultUser;
    default:
      return state.user
  }
}

export default setUser;
