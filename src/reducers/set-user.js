import * as actTyps from "../actions/action-types";

const setUser = (state, action) => {
  if (state === undefined) {
    return {
      isLogin: false
    };
  };

  switch (action.type){
    case actTyps.SUCCESS_LOGIN:
      return {
        isLogin: true,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        phone: action.payload.phone,
        email: action.payload.email,
        address: action.payload.address,
        _id: action.payload._id
      };
    case actTyps.UPDATE_USER:
      return {
        isLogin: true,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        phone: action.payload.phone,
        email: action.payload.email,
        address: action.payload.address,
        _id: action.payload._id
      };
    case actTyps.SUCCESS_LOGOUT:
      return {
      isLogin: false
    };
    default:
      return state.user
  }
}

export default setUser;
