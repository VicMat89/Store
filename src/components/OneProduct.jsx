import "../assets/App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { useAppContext } from "../context/contextCart";
import { useAppContextTotal } from "../context/contextTotal";
import { useNavigate } from "react-router-dom";

const OneProduct = () => {
    const navigate = useNavigate();
    const context = useAppContext();
    const contextTotal = useAppContextTotal();
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

    const addToTotal = () => {
        const setTotal = contextTotal.shareTotal.map((a) => a.totalQuantity !== null ? {
            ...a, totalQuantity: a.totalQuantity + product.price,
            totalUnits: a.totalUnits + 1
        }
            : "")
        contextTotal.setShareTotal(setTotal)

    }
    const sendToCart = () => {
        const verification = context.sharedState.find((x) => x.id === product.id)
        if (verification) {
            const setProd = context.sharedState.map((x) => x.id === verification.id ? {
                ...verification, units: verification.units + 1,
                total: product.price * (verification.units + 1)
            } : x)
            context.setSharedState(setProd)
        }
        else {
            context.sharedState.push({
                ...product,
                units: 1,
                total: product.price
            })
        }
        addToTotal()

    }

    return (<>

        <div className="container0">
            <div className="container1">
                <img src={product.image} width="300" height="300" />
                <div className="textOne">
                    <h1 className="title1">{product.category}</h1>
                    <h2>{product.title}</h2>
                    <h1>{product.price} EUR</h1>
                </div>
            </div>
            <div className="container2">
                <p>{product.description}</p>
                {veri ? (<h3>Rate {product.rating.rate} <img src="https://img.icons8.com/material-rounded/24/000000/star--v1.png" /></h3>) : ""}
                <div className="contButton">
                    <Button className="button" variant="contained" onClick={() => sendToCart(product.id)}>Add to Cart</Button>
                    <Button className="button1" variant="contained" onClick={() => navigate("/carrito")}>Go to Cart</Button>
                </div>
            </div>
        </div>
    </>
    )

}

export default OneProduct;