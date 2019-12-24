import * as actTyps from "./action-types";

const createBestSalesList = (payload) => {
    return {
        type: actTyps.CREATE_BEST_SALES_LIST,
        payload
    }
};

const createCategoryList = (payload) => {
  return {
    type: actTyps.CREATE_CATEGORY_LIST,
    payload
  }
}

const setCategoryLoading = (payload) => {
  return {
    type: actTyps.SET_CATEGORY_LOADING,
    payload
  }
}

const setProduct = (payload) => {
  return {
    type: actTyps.SET_PRODUCT,
    payload
  }
}

const setProductLoading = (payload) => {
  return {
    type: actTyps.SET_PRODUCT_LOADING,
    payload
  }
}

export const fetchBestSalesList = (getBestSales, dispatch) => {
    getBestSales()
        .then((list) => {
            dispatch(createBestSalesList(list));
        })
};

export const fetchCategoryList = (getCategoryList, id, dispatch) => {
  dispatch(setCategoryLoading(true));
  getCategoryList(id)
    .then((list) => {
      dispatch(createCategoryList({list,id}));
      dispatch(setCategoryLoading(false));
    })
};

export const fetchProduct = (getProduct, id, dispatch) => {
  dispatch(setProductLoading(true));
  getProduct(+id)
    .then(item => {
      dispatch(setProduct({item, id}));
      dispatch(setProductLoading(false));
    });
}