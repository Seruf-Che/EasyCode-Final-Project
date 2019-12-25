import * as actTyps from "./action-types";

export const addToCart = (payload) => {
  return {
    type: actTyps.ADD_TO_CART,
    payload
  }
}

export const setCount = (payload) => {
    return {
        type: actTyps.CHANGE_COUNT,
        payload
    }
};