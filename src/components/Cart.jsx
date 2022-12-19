import { useAppContext } from "../context/contextCart";
import { useAppContextTotal } from "../context/contextTotal";
import { Button } from "@mui/material";

const Cart = () => {

    const context = useAppContext();
    const contextTotal = useAppContextTotal();



    const addItem = (id) => {
        const verification = context.sharedState.find((x) => x.id === id)
        const setItem = context.sharedState.map((x) => x.id === id ? {
            ...verification, units: verification.units + 1,
            total: verification.price * (verification.units + 1)
        } : x)
        context.setSharedState(setItem)

        const addToTotal = () => { // funcion sumar importes en el total final//
            const setTotal = contextTotal.shareTotal.map((a) => a.totalQuantity !== 0 ? {
                ...a, totalQuantity: a.totalQuantity + verification.price,
                totalUnits: a.totalUnits + 1
            }
                : "")
            contextTotal.setShareTotal(setTotal)
        }
        addToTotal()
    }

    const delItem = (id) => {
        const verification = context.sharedState.find((x) => x.id === id)
        if (verification.units === 1) {
            const setItem2 = context.sharedState.filter((x) => verification.id !== x.id)
            context.setSharedState(setItem2)
        } else {
            const setItem1 = context.sharedState.map((x) => x.id === verification.id ? {
                ...verification, units: verification.units - 1,
                total: verification.price * (verification.units - 1)
            } : x)
            context.setSharedState(setItem1)
        }
        const addToTotal = () => { // funcion sumar importes en el total final//
            const setTotal = contextTotal.shareTotal.map((a) => a.totalQuantity !== null ? {
                ...a, totalQuantity: a.totalQuantity - verification.price,
                totalUnits: a.totalUnits - 1
            }
                : "")
            contextTotal.setShareTotal(setTotal)
        }
        addToTotal()
    }
    return (<>
        {context.sharedState.length < 1 ? (<div className="cart-empty"><h1>Your cart is empty</h1></div>) :
            (<div>
                <h1 className="text-cart">CART</h1>
                {context.sharedState.map((prod) =>
                    <div className="container0" key={prod.id}>
                        <div className="container-cart1">
                            <img src={prod.image} width="250" height="250" />
                            <div className="textOne">
                                <h1 className="title1">{prod.category}</h1>
                                <h2>{prod.title}</h2>
                                <h3><button onClick={() => addItem(prod.id)}>+</button> {prod.units} <button onClick={() => delItem(prod.id)}>-</button></h3>
                                <h3>{prod.total} EUR</h3>

                            </div>
                        </div>
                    </div>
                )}
                <hr />
                <div className="totalCart">
                    <h2 >Total of your products are... {contextTotal.shareTotal[0].totalQuantity.toFixed(2)} EUR</h2>
                    <Button className="button" variant="contained" >go to payment</Button>
                </div>
            </div>)}
    </>)
}


export default Cart