import React from "react";

const OrderPageCart = ({cart: {list} = {}}) => {
  return (
    <ul className={"order-page__items"}>
      {list.map((e, i) => <li key={e.id}>#{i+1}, {e.model}, x{e.count}</li>)}
    </ul>
  )
}

export default OrderPageCart;