import React from "react";
import ProductCard from "../cards/product-card/product-card";
import Spinner from "../spinner/spinner";

const CategoryList = ({list, isLoading}) => {
  let status = list ? (list.status ? list.status: false): false;
  
  if (status) return <div className={"category-list"}>{status}</div>
  
  return (
    <div className={"category-list"}>
      {
        isLoading ? <Spinner small={true}/>
          : list ? list.map(e => <ProductCard item={e} key={e.id}/>)
          : "" 
      }     
    </div>
  )
}

export default CategoryList;