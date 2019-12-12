import setUser from "./set-user";
import setModal from "./set-modal";
import setBestSalesList from "./set-best-sales-list";
import setCategoriesLists from "./set-categories-lists";

const reducer = (state, action) => {
  // console.log("STORE:", state);
  return {
    user: setUser(state, action),
    modal: setModal(state, action),
    bestSales: setBestSalesList(state, action),
    categoriesLists: setCategoriesLists(state, action)
  }
}

export default reducer;
