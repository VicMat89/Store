import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import "./assets/App.css";
import { MenuNav } from "./components/MenuNav";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import { AppWrapper } from "./context/contextCart";
import { AppWrapperTotal } from "./context/contextTotal";
import { AppUsers } from "./context/contextUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Users from "./components/Users";
import Profile from "./components/Profile";

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
      <AppWrapperTotal>
      <AppUsers>
        <Router>
          <MenuNav productos={products} />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/Carrito" element={<Cart products={products} />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/Products/product/:id" element={<OneProduct />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Profile/:name" element={<Profile />} />
          </Routes>
        </Router>
        </AppUsers>
        </AppWrapperTotal>
      </AppWrapper>

    </>
  );
}
export default App;
