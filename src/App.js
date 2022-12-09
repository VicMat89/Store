import { useState, useEffect } from "react";
import axios from "axios";
import GridProducts from "./components/GridProducts";
import './assets/App.css';
import DemoCarousel from "./components/Carousel";


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
    <DemoCarousel info={products} />
      <GridProducts products={products} />

    </>
  );
}
export default App;













