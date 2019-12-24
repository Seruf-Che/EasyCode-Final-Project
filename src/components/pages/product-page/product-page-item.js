import React from "react";
import {connect} from "react-redux";
import {setUserModal} from "../../../actions/modal";
import {addToCart} from "../../../actions/cart";
import * as actTyps from "../../../actions/action-types";

class ProductPageItem extends React.Component {
  
  state = {
    wasAdded: false
  };
  
  addToCurtHandler = (item) => {
    const {isLogin, setUserModal, addToCart, setInfoModal} = this.props; 
    
    if (!isLogin) return setUserModal(actTyps.OPEN_LOGIN_MODAL);
    addToCart(item);
    setInfoModal(actTyps.OPEN_INFO_MODAL, "Product was added");
    this.setState({wasAdded: true});
  }
  
  render(){
    const {item} = this.props;
    const {model, price, stoсkPrice, img, description} = item;
    return (
      <article className="product-page__item">
        <img src={img} alt="" className="product-page__img"/>
        <div className="product-page__meta">
        <h1 className="product-page__model">{model}</h1>
        <div className="product-page__price">
        Price: { stoсkPrice ?
          <><span className="product-page__old-price">{price}$</span> {stoсkPrice}$</>
          :
          `${price}$`
          }
        </div>
        <p className="product-page__description">{description}</p>
        <button
          disabled={this.state.wasAdded}
          className={"button"}
          onClick={() => this.addToCurtHandler(item)}>Add to cart</button>
        </div>
      </article>
    )
  };
};

const mapStateToProps = ({user}) => {
  return {
    isLogin: user.isLogin
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    setUserModal: (type) => dispatch(setUserModal(type)),
    setInfoModal: (type, payload) => dispatch(setUserModal(type, payload)),
    addToCart: (item) => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(ProductPageItem);