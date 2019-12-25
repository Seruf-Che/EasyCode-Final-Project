import React from "react";
import {connect} from "react-redux";
import {setCount} from "../../../actions/cart";

import Section from "../../wrappers-components/section/section";
import CartPageItem from "./cart-page-item";

const CartPage = ({cart = {}, setCount}) => {
  const {list} = cart;
  console.log("list", list);
  console.log("Cart", cart);
  return (
    <main>
      <Section heading={"Your cart"}>
        {list.length > 0 ? 
          <div className={"cart-page"}>
            {list.map((e, ind) => <CartPageItem 
                                    key={e.id}
                                    index={ind}
                                    item={e}
                                    setCount={setCount}/>)}
          </div>
          : "Your cart is empty"}        
      </Section>
    </main>
  )
};

const mapStateToProps = ({cart}) => {
  console.log(cart);
  return {cart}
}

const mapDispatchToProps = dispatch => {
  return {
    setCount: (id, count) => dispatch(setCount({id, count}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);