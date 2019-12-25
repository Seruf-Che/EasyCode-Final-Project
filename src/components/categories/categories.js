import React from "react";
import CategoriesItem from './categories-item'

import img1 from './images/macbook.png'
import img2 from './images/accessories.png'
import img3 from './images/applewatch.png'
import img4 from './images/imac.png'
import img5 from './images/ipad.jpg'
import img6 from './images/iphone.jpeg'

const categories = [
  {
    id: 837382,
    name: "iPhone",
    img: img6
  },
  {
    id: 736726,
    name: "iPad",
    img: img5
  },
  {
    id: 637125,
    name: "MacBook",
    img: img1
  },
  {
    id: 556156,
    name: "Accessories",
    img: img2
  },
  {
    id: 687814,
    name: "Applewatch",
    img: img3
  },
  {
    id: 428915,
    name: "iMac",
    img: img4
  },
];

const Categories = () => {
  return (
    <div className={"categories"}>
      {categories.map(e => <CategoriesItem item={e} key={e.id}/>)}
    </div>
  )
};

export default Categories;