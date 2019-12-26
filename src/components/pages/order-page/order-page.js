import React from "react";
import Section from "../../wrappers-components/section/section";
import Spinner from "../../spinner/spinner";
import OrderPageAccount from "./order-page-account";
import OrderPageCart from "./order-page-cart";

import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {setUserModal} from "../../../actions/modal";
import {clearCart} from "../../../actions/cart";
import * as actTyps from "../../../actions/action-types";
import {withRouter} from "react-router";

class OrderPage extends React.Component {
  
  state = {
    user: {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      phone: this.props.user.phone,
      email: this.props.user.email,
      address: this.props.user.address
    },
    loading: false
  }

  onChangeHandler = e => {
    const {name, value} = e.currentTarget;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      reason: "",
      success: false,
    })
  };

  onSubmitHandler = () => {
    const {submitOrder, errorOrder, clearCart, history} = this.props;
    const {first_name, last_name, phone, email, address} = this.state.user;
    if (first_name && last_name && phone && email && address) {
      clearCart();
      submitOrder(first_name);
      return history.push('/cart');
    }
    return errorOrder();
  }
  
  render() {
    const {loading, user} = this.state;
    const {cart} = this.props;
    
    return(
      <main>
        {loading ? <Spinner fixed={true}/>: ""}
        <Section heading={"Order details"}>
          <OrderPageCart cart={cart}/>
          <OrderPageAccount user={user} onChangeHandler={this.onChangeHandler}/>
          <div className={"order-page__total"}>
            <span className={"order-page__count"}>Total items: {cart.count}</span>
            <span className={"order-page__sum"}>Total amount: {cart.sum}$</span>
          </div>
          <div className={"order-page__buttons"}>
            <button
              className={"button"}
              onClick={this.onSubmitHandler}>Submit order</button>
            <Link
              className={"button"}
              to={"/shop"}>Back to shop</Link>
          </div>
        </Section>
      </main>
    )
  }
}

const mapStateToProsp = ({user, cart}) => {
  return {user, cart}
}

const mapStateToDispatch = dispatch => {
  return {
    submitOrder: (name) => dispatch(setUserModal(actTyps.OPEN_INFO_MODAL,`Dear ${name}, just to let you know — we've received your order, and it is now being processed`)),
    errorOrder: () => dispatch(setUserModal(actTyps.OPEN_INFO_MODAL,`Please fill all fields`)),
    clearCart: () => dispatch(clearCart())
  }
}

export default withRouter(
  connect(mapStateToProsp, mapStateToDispatch)(OrderPage)
);
