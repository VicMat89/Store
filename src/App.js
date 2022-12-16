import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./components/Home";
import "./assets/App.css";
import { MenuNav } from "./components/MenuNav";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import { AppWrapper } from "./context/contextCart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";


function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const info = await axios.get("https://fakestoreapi.com/products");
      setProducts(info.data);
    };
    getData();
  }, []);

  
  return (
    <>
      <AppWrapper>
        <Router>
          <MenuNav productos={products} />
          <Link to="/carrito">CARRITO</Link>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/carrito" element={<Cart products={products} />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/Products/product/:id" element={<OneProduct />} />
          </Routes>
        </Router>
      </AppWrapper>

    </>
  );
}
export default App;













