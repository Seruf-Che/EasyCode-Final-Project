import React from "react";
import SvgTrashIcon from "../../svgs/trash-icon";

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
        <button onClick={()=> setCount(id, -1)} className={"cart-page__count-icon"}>-</button>
        <button onClick={()=> setCount(id, -Infinity)} className={"cart-page__trash-icon"}><SvgTrashIcon /></button>
        <button onClick={()=> setCount(id, 1)} className={"cart-page__count-icon"}>+</button>
      </div>
    </div>
  )
}

export default CartPageItem;
