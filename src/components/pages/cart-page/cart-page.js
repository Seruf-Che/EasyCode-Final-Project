import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {setCount, clearCart} from "../../../actions/cart";

import Section from "../../wrappers-components/section/section";
import CartPageItem from "./cart-page-item";

const CartPage = ({cart = {}, setCount, clearCart}) => {
  const {list} = cart;

  return (
    <main>
      <Section heading={"Your cart"}>
        {list.length > 0 ?
          <>
          <div className={"cart-page"}>
            {list.map((e, ind) => <CartPageItem
                                    key={e.id}
                                    index={ind}
                                    item={e}
                                    setCount={setCount}/>)}
          </div>
          </>
          : "Your cart is empty"}
          {list.length > 0 ?
            <div className="cart-page__buttons">
              <button
                onClick={()=>alert("Order")}
                className={"button"}>Make order</button>
              <button
                onClick={clearCart}
                className={"button button--danger"}>Clear cart</button>
            </div>
            : <div className="cart-page__buttons">
              <Link
                to={"/shop"}
                className={"button"}>Go to shop</Link>
            </div>
          }
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
    setCount: (id, count) => dispatch(setCount({id, count})),
    clearCart: () => dispatch(clearCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
