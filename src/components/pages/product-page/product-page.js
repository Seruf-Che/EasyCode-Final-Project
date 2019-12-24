import React from "react";
import {connect} from "react-redux";
import {fetchProduct} from "../../../actions/products";
import withService from "../../hoc/with-service";
import Section from "../../wrappers-components/section/section";
import BestSales from "../../best-sales/best-sales";
import Spinner from "../../spinner/spinner";
import ProductPageItem from "./product-page-item";

class ProductPage extends React.Component {
  
  componentDidMount() {
    this.getProduct();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getProduct();
    }
  }
  
  getProduct = () => {
    const {id, setProduct, products} = this.props;
    if (products.list[id]) return;
    setProduct(id);
  }

  render() {
    const {id, products} = this.props;
    const {isLoading, list = {}} = products;

    return(
        <main className={"product-page"}>
        
        <Section>
          {isLoading ? <Spinner small={true}/> : ""}
          {
            list[id] ? 
              list[id].status ? 
                list[id].status 
              : <ProductPageItem item={list[id]}/> 
            : ""
          }
        </Section>
        <Section heading={"Best Sales"}>
          <BestSales />
        </Section>
      </main>
    )
  };
};

const mapStateToProps = ({products}) => {
  return {products}
};

const mapStateToDispatch = (dispatch, ownProps) => {
  const {service: {getCurrentDevice}} = ownProps;
  return {
    setProduct: (id) => fetchProduct(getCurrentDevice, id, dispatch)
  }
};

export default 
  withService(
    connect(mapStateToProps, mapStateToDispatch)(ProductPage)
  );