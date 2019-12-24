import * as actTyps from "../actions/action-types";

const setProduct = (state, action) => {
  if (state === undefined) {
    return {
      list: {},
      isLoading: false
    }
  }
  
  switch (action.type) {
    case actTyps.SET_PRODUCT:
      const {item, id} = action.payload; 
      return {
        ...state.products,
        list: {
          ...state.products.list,
          [id]: item
        }
      };
      
    case actTyps.SET_PRODUCT_LOADING:
      return {
        ...state.products,
        isLoading: action.payload
      };
      
    default:
      return {...state.products}
  }
}

export default setProduct;