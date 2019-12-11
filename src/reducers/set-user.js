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
        ...state.user,
        isLogin: true
      };
    case "SUCCESS_LOGOUT":
      return defaultUser;      
    default:
      return state.user
  }
}

export default setUser;