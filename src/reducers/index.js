import setUser from "./set-user";
import setModal from "./set-modal";

const reducer = (state, action) => {
  console.log("STORE:", state);
  return {
    user: setUser(state, action),
    modal: setModal(state, action)
  }
}

export default reducer;