import "../assets/App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { useAppContext } from "../context/contextCart";
import { useNavigate } from "react-router-dom";

const OneProduct = () => {
    const navigate = useNavigate();
    const context = useAppContext();
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [veri, setVeri] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            const info = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(info.data)
            setVeri(true)
        }
        getProduct()

    }, [id]);

    const sendToCart = (id) => {
        
            context.setSharedState([{ ...product, units: 1 }])
            console.log(context)
            console.log(context.sharedState[0])
        
    }

    return (<>

        <div className="container0">
            <div className="container1">
                <img src={product.image} width="250" height="250" />
                <div className="textOne">
                    <h1 className="title1">{product.category}</h1>
                    <h2>{product.title}</h2>
                    <h3>{product.price} EUR</h3>
                </div>
            </div>
            <div className="container2">
                <p>{product.description}</p>
                {veri ? (<p>Rate {product.rating.rate} </p>) : ""}
                <div className="contButton">
                    <Button className="button" variant="contained" onClick={() => sendToCart(product.id)}>Añadir a carrito</Button>
                    <Button className="button" variant="contained" onClick={() => navigate("/carrito")}>Ir a carrito</Button>
                </div>
            </div>
        </div>
    </>
    )

}

export default OneProduct;