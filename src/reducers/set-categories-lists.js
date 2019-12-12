const setCategoriesLists = (state, action) => {
  if(state === undefined) {
    return {
      lists: {},
      loading: false
    }
  }

  switch (action.type) {
    case "CREATE_CATEGORY_LIST":
      const {id, list} = action.payload;
      return {
        ...state.categoriesLists,
        lists : {
        ...state.categoriesLists.lists,
        [id]: list
        }
      };

    case "SET_CATEGORY_LOADING":
      return {
        ...state.categoriesLists,
        loading: action.payload
      };

    default:
      return state.categoriesLists;
  }
};

export default setCategoriesLists;