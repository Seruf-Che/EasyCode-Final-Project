import React from "react";

const ProductCard = (props) => {
  const {item: {img, model, price, stoсkPrice} = {}} = props;

  return(
    <article className={"product-card"}>
        <div className="product-card__img">
            <img src={img} alt={model}/>
        </div>
        <div className="product-card__model">{model}</div>
        <div className="product-card__price">
          Price: { stoсkPrice ?
            <><span className="product-card__old-price">{price}$</span> {stoсkPrice}$</>
            :
            `${price}$`
          }
        </div>
    </article>
  )
}

export default ProductCard;