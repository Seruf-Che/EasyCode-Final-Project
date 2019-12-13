import React from "react";

const ProductPageItem = ({item}) => {
  const {model, price, stoсkPrice, img, description} = item;
  
  return (
    <article className="product-page__item">
      <img src={img} alt="" className="product-page__img"/>
      <div className="product-page__meta">
      <h1 className="product-page__model">{model}</h1>
      <div className="product-page__price">
      Price: { stoсkPrice ?
      <><span className="product-page__old-price">{price}$</span> {stoсkPrice}$</>
      :
      `${price}$`
      }
      </div>
      <p className="product-page__description">{description}</p>
      <button className={"button"}>Add to cart</button>
      </div>
    </article>
  )
}

export default ProductPageItem;