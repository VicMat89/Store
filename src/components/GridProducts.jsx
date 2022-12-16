import { Button } from "@mui/material";
import "../assets/App.css"
import { useState, useEffect } from 'react';

import DemoCarousel from "./Carousel";

const GridProduct = (props) => {
    

    const [productos, setProductos] = useState([]);
    const [filter, setFilter] = useState([])

    useEffect(() => {
        setProductos(props.products)
        setFilter(props.products)
    }, [props]);

    const filterProducts = (cat) => {
        const getCategories = productos.filter((a) => cat === a.category)
        setFilter(getCategories)
    }
    return <>

        <DemoCarousel productos={productos} />
        

        <div className="container-button">
            <Button variant="outlined" className="button" onClick={() => setFilter(productos)}>ALL</Button>
            <Button variant="outlined" className="button" onClick={() => filterProducts("men's clothing")}>Men's clothing</Button>
            <Button variant="outlined" className="button" onClick={() => filterProducts("women's clothing")}>Women`s clothing</Button>
            <Button variant="outlined" className="button" onClick={() => filterProducts("electronics")}>Electronics</Button>
            <Button variant="outlined" className="button" onClick={() => filterProducts("jewelery")}>Jewelery</Button>
        </div>
        <div className="containerProducts">
            {filter.map((prod) => (
                <div className="products"
                    key={prod.id}>
                    <img src={prod.image} height="200px" width={200} alt="auto" />
                    <h3 className="title">{prod.title}</h3>
                    <p>{prod.price}€</p>
                    <Button variant="outlined" className="button">Buy</Button>

                </div>
            ))
            }
        </div>
    </>

}

export default GridProduct;

