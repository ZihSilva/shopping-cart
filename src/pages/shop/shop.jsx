import React from 'react';
import { PRODUCTS } from "../../products.js";
import Product from './product.jsx';
import "./shop.css"

function Shop() {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Minimalist Shop</h1>
            </div>
            <div   className="products">
                {PRODUCTS.map((product) =>
                
                   
                    <div key={product.id}>
                    <Product data={product} />
                    </div>
                    
                    )}
                    
            </div>

        </div>
    )
}

export default Shop;