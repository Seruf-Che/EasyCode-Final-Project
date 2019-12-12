import React from "react";

const CategoryListItem = ({item}) => {
  const {img, model} = item;
  
  return(
    <article className={"best-sales__item"}>
        <div className="best-sales__img">
            <img src={img} alt={model}/>
        </div>
        <div className="best-sales__model">{model}</div>
    </article>
  )
}

export default CategoryListItem;