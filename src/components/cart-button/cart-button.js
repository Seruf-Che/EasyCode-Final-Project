import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import SvgCartIcon from "../svgs/cart-icon";

const CartButton = ({count, sum}) => {
  return (
    <Link to="/cart" className={"cart-button"}>
      <div className={"cart-button__wrapper"}>
        <div className={"cart-button__icon"}>
          <SvgCartIcon/>
        </div>
        <span className={"cart-button__sum"}>{sum}$</span>
      </div>
      <div className={"cart-button__count"}>{count}</div>
    </Link>
  )
}

const mapStateToProps = ({cart}) => {
  return {
    count: cart.count,
    sum: cart.sum,
  }
}

export default connect(mapStateToProps)(CartButton);