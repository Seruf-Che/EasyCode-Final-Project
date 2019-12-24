import React from "react";
import {Link} from "react-router-dom";

const ProductCard = (props) => {
  const {item: {id, img, model, price, stoсkPrice} = {}} = props;

  return(
    <Link to={`/product/${id}`} className={"product-card"}>
      <div className="product-card__img">
          <img src={img} alt={model}/>
      </div>
      <div className="product-card__model">{model}</div>
      <div className="product-card__price">
        Price: 
        {stoсkPrice ?
            <>
              <span className="product-card__old-price">
                {price}$
              </span> {stoсkPrice}$
            </>
          :
            `${price}$`
        }
      </div>
    </Link>
  )
};

export default ProductCard;