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

const createBestSalesList = (payload) => {
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

const createCategoryList = (payload) => {
  return {
    type: "CREATE_CATEGORY_LIST",
    payload
  }
}

export const setCategoryLoading = (payload) => {
  return {
    type: "SET_CATEGORY_LOADING",
    payload
  }
}

export const fetchCategoryList = (getCategoryList, id, dispatch) => {
  dispatch(setCategoryLoading(true));
  getCategoryList(id)
    .then((list) => {
      dispatch(createCategoryList({list,id}));
      dispatch(setCategoryLoading(false));
    })
};