import { useState, useEffect } from "react";
import axios from "axios";
import GridProducts from "./components/GridProducts";


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
      <GridProducts products={products} />
    </>
  );
}

export default App;
