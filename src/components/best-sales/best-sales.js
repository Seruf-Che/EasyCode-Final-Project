import React from "react";
import withService from "../hoc/with-service";
import {connect} from "react-redux";
import {fetchBestSalesList} from "../../actions/products";
import ProductCard from "../cards/product-card/product-card";

class BestSales extends React.Component {

  componentDidMount() {
    this.props.getBestSalesList();
  }

  render() {
    const {bestSales = []} = this.props;
    return (
      <div className={"best-sales"}>
        {bestSales.length > 0 ?
          bestSales.map(e => <ProductCard key={e.id} item={e}/>)
          : ""}
      </div>
    )
  }
};

const mapStateToProps = ({bestSales}) => {
  return {bestSales}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {service: {getBestSales}} = ownProps;
  return {
    getBestSalesList: () => fetchBestSalesList(getBestSales, dispatch)
  }
}

export default
  withService(
    connect(mapStateToProps, mapDispatchToProps)(BestSales)
  );