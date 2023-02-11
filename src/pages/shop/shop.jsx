import React from 'react';
import { PRODUCTS } from "../../products.js";
import { Product } from './product.jsx';
import "./shop.css"

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Store</h1>
      </div>
      <div className="searchIcon" >       
         <i class="fa-solid fa-magnifying-glass"></i>
         <i class="fa-regular fa-bars-filter"></i>
      </div>
      <div className="products">

        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}

      </div>
    </div>
  )
}
