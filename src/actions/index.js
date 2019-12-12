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
  switch (type) {
    case ("OPEN_LOGIN_MODAL"):
      return {type};
    case ("OPEN_SIGNIN_MODAL"):
      return {type};
    case ("OPEN_LOGOUT_CONFIRM_MODAL"):
      return {type};
    default:
      throw Error(`There is no such type like ${type}`);    
  }
}

export const setLogoutModal = () => {
  return {
    type: "CLOSE_MODAL"
  }
}

export const createBestSalesList = (payload) => {
    return {
        type: "CREATE_BEST_SALES_LIST",
        payload
    }
};

export const fetchBestSalesList = (getBestSales, dispatch) => {
    getBestSales()
        .then((list) => {
            dispatch(createBestSalesList(list));
        })
};
