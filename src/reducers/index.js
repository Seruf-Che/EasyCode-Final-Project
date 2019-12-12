import setUser from "./set-user";
import setModal from "./set-modal";
import setBestSalesList from "./set-best-sales-list";

const reducer = (state, action) => {
  // console.log("STORE:", state);
  return {
    user: setUser(state, action),
    modal: setModal(state, action),
    bestSales: setBestSalesList(state, action)
  }
}

export default reducer;
