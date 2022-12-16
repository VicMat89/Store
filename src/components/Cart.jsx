import { useAppContext } from "../context/contextCart";


const Cart = () => {
    
    const context = useAppContext();

    return <>
        
        <div className="container0">
            <h1>Carrito</h1>
            <div className="container1">
                <img src={context.sharedState.image} width="250" height="250" />
                <div className="textOne">
                    <h1 className="title1">{context.sharedState.category}</h1>
                    <h2>{context.sharedState.title}</h2>
                    <h3>{context.sharedState.price} EUR</h3>
                    <h3>Unidades en el carrito: {context.sharedState.units}</h3>
                </div>
            </div>
        </div>
    </>

}


export default Cart