import { useState, useEffect } from "react";
import axios from "axios";
import GridProducts from "./components/GridProducts";
import {MenuNav} from './components/MenuNav';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const getData = async () => {
          const info = await axios.get("https://fakestoreapi.com/products");
          setProducts(info.data);
          console.log(info)

      };
      getData();
  }, []);

  return (
    <>
      <MenuNav productos = {products}/>
      <GridProducts products={products} />
    </>
  );
}

export default App;
