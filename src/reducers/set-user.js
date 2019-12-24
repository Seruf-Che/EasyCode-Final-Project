const defaultState = {
  isLogin: false
}

const setUser = (state, action) => {
  if (state === undefined) {
    return defaultState
  }

  switch (action.type){
    case "SUCCESS_LOGIN":
      return {
        isLogin: true,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        phone: action.payload.phone,
        email: action.payload.email,
        address: action.payload.address,
        _id: action.payload._id
      };
    case "SUCCESS_LOGOUT":
      return defaultState;
    default:
      return state.user
  }
}

export default setUser;
