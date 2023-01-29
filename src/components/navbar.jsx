import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar">
                <h1>Minimalist Shop</h1>
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
