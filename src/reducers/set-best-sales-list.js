const setBestSalesList = (state, action) => {

    if(state === undefined) {
        return {}
    }

    switch (action.type) {
        case "CREATE_BEST_SALES_LIST":
            return action.payload;
        default:
            return state.bestSales;
    }
};

export default setBestSalesList;