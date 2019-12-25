import React from "react";

const CartPageItem = ({item, index, setCount}) => {
  const {id, model, img, description, count, stoсkPrice, price} = item;
  return(
    <div className="cart-page__item">
      <div className="cart-page__number">{index + 1}</div>
      <div className="cart-page__model">{model}</div>
      <div className="cart-page__img">
        <img src={img} alt={model}/>
      </div>
      <div className="cart-page__description">{description}</div>
      <div className="cart-page__count">{count}</div>
      <div className="cart-page__price">{stoсkPrice ? stoсkPrice : price}$</div>
      <div className="cart-page__value">
        <span onClick={()=> setCount(id, -1)}>DEC</span>
        <span>remove</span>
        <span onClick={()=> setCount(id, 1)}>INC</span>
      </div>
    </div>
  )
}

export default CartPageItem;