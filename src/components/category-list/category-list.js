import React from "react";
import CategoryListItem from "./category-list-item";
import Spinner from "../spinner/spinner";

const CategoryList = ({list, isLoading}) => {
  return (
    <div className={"category-list"}>
      {
        isLoading ? <Spinner />
          : list ? list.map(e => <CategoryListItem item={e} key={e.id}/>)
          : "" 
      }
      
    </div>
  )
}

export default CategoryList;