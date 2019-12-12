import React from "react";

const BestSalesItem = (props) => {
  const {item: {img, model, price, stoсkPrice} = {}} = props;

  return(
    <article className={"best-sales__item"}>
        <div className="best-sales__img">
            <img src={img} alt={model}/>
        </div>
        <div className="best-sales__model">{model}</div>
        <div className="best-sales__price">Price: <span className="best-sales__old-price">{price}$</span> {stoсkPrice}$</div>
    </article>
  )
}

export default BestSalesItem;