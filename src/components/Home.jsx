import { Button } from "@mui/material";
import "../assets/App.css";
import { useState, useEffect } from 'react';
import DemoCarousel from "./Carousel";
import { useNavigate } from "react-router-dom";

const Home = (props) => {

    const navigate = useNavigate()
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        setProductos(props.products)
    }, [props]);

  
    return <>
        <h1 className="text-top-home">THE LATETS TRENDS</h1>
        <DemoCarousel info={productos} />
        <hr />
        <h1 className="containerProducts"> TOP RATE <img src="https://img.icons8.com/ios-filled/50/null/prize.png" /></h1>

        <div className="containerProducts">
            {productos.map((prod) => prod.rating.rate >= 4? (
                <div className="products"
                    key={prod.id}>
                    <img src={prod.image} height="200px" width={200} alt="auto" />
                    <h3 className="title">{prod.title}</h3>
                    <p className="p">{prod.price} €</p>
                    <h3 className="p">Rate {prod.rating.rate} <img src="https://img.icons8.com/material-rounded/24/000000/star--v1.png" /></h3>
                    <div className="container-button1">
                    <Button variant="contained" className="button1" onClick={() => navigate(`/Products/product/${prod.id}`)}>Buy</Button>
                    </div>
                </div>): "")}

        </div>

    </>

}

export default Home;