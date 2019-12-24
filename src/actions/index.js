export const setUser = (payload) => {
  return {
    type: "SUCCESS_LOGIN",
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

export const setUserModal = (type, payload) => {
  switch (type) {
    case ("OPEN_INFO_MODAL"):
      return {type, payload};
    case ("OPEN_LOGIN_MODAL"):
      return {type};
    case ("OPEN_SIGNIN_MODAL"):
      return {type};
    case ("OPEN_LOGOUT_CONFIRM_MODAL"):
      return {type};
    case ("OPEN_DELETE_CONFIRM_MODAL"):
      return {type, payload};
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

export const setProduct = (payload) => {
  return {
    type: "SET_PRODUCT",
    payload
  }
}

export const setProductLoading = (payload) => {
  return {
    type: "SET_PRODUCT_LOADING",
    payload
  }
}

export const fetchProduct = (getProduct, id, dispatch) => {
  dispatch(setProductLoading(true));
  getProduct(+id)
    .then(item => {
      dispatch(setProduct({item, id}));
      dispatch(setProductLoading(false));
    });
}

export const fetchDeleteUser = (deleteUserService, _id, password, dispatch) => {
  deleteUserService(_id, password)
    .then((response) => {
      if (response.status !== "-1") return dispatch(logoutUser());

      dispatch(setUserModal("OPEN_INFO_MODAL", response.reason));
  })
}

export const updateUser = (payload) => {
  return {
    type: "UPDATE_USER",
    payload
  }
}