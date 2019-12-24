import * as actTyps from "../actions/action-types";

const setCart = (state, action) => {
  if (state === undefined) {
    return {
      list: [],
      count: 0,
      sum: 0
    };
  };
  
  const addToCart = (state, data) => {
    if (state.cart.list.some(el => el.id === data.id)) return state.cart;

    const newItem = {...data, count: 1};
    const newData = [...state.cart.list, newItem];
    return updateData(newData);
  };
  
  const changeCount = (state, payload) => {
    const { id, count } = payload;
    const { list } = state.cart;
    let newData = [];

    list.map((el) => {
      if (el.id === id) {
        const newItem = {
          ...el,
          count: el.count + count
        };
        
        if (newItem.count > 0) return newData = [...newData, newItem];
      }
      
      return newData = [...newData, el];
    });
    
    return updateData(newData)
  };
  
  const updateData = (list) => {
    let count = 0;
    let sum = 0;

    list.forEach(el => {
      count += el.count;
      sum += el.price * el.count;
    });

    return {list, sum, count}
  };

  switch (action.type) {
    case actTyps.ADD_TO_CART:
      return addToCart(state, action.payload);
    case actTyps.CHANGE_COUNT:
      return changeCount(state, action.payload);
    case actTyps.CLEAR_CART:
      return {
          list: [],
          sum: 0,
          count: 0
      }
    default:
      return state.cart
  }
}

export default setCart;
