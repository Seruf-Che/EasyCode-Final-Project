import React from "react";
import {Link} from "react-router-dom";

const CategoriesItem = ({item}) => {
  return (
    <Link to={`/category/${item.id}`} className="categories__item">
      <div className="categories__img">
        <img src={item.img} alt={item.name}/>
      </div>
      <div className="categories__title">{item.name}</div>
    </Link>
  )
}

export default CategoriesItem;