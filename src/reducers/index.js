import setUser from "./set-user";
import setModal from "./set-modal";
import setBestSalesList from "./set-best-sales-list";
import setCategoriesLists from "./set-categories-lists";
import setProduct from "./set-product";
import setCart from "./set-cart";

const reducer = (state, action) => {
//  console.log("STORE:", state);
  return {
    user: setUser(state, action),
    modal: setModal(state, action),
    bestSales: setBestSalesList(state, action),
    categoriesLists: setCategoriesLists(state, action),
    products: setProduct(state, action),
    cart: setCart(state, action)
  }
};

export default reducer;
