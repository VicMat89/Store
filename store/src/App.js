import axios from "axios";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const info = await axios.get("https://fakestoreapi.com/products");
      setProduct(info.data);
    };
    getData();
    console.log(product);
  }, []);

  return <>
  </>
}

export default App;
