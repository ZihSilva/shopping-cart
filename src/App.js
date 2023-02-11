import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from "./pages/shop/shop";
import { Login } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Auth0Provider } from "@auth0/auth0-react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <div className="App">

      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>              
              <Route path="/"  element={<Home />} />
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="cart" element={<Cart />}></Route>
            </Routes>
          </Router>
        </ShopContextProvider>
      </Auth0Provider>
    </div>
  );
}

export default App;
