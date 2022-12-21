import '../assets/navstyles.css'

import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { useAppContextTotal } from "../context/contextTotal";
import { useAppContextUsers } from "../context/contextUsers";


export function MenuNav(props) {
    const context = useAppContextTotal();
    const contextUser = useAppContextUsers();
    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();
    const navigate4 = useNavigate();
    const navigate5 = useNavigate();

    let veriLogin = contextUser.sharedUsers.find((x) => x.isLogin === true)
   

    return (<div className='nav-container'>
        <div className='container-nav1'>
            <div className="logo"><img className="img-nav" src='https://img.freepik.com/vector-gratis/carro-tienda-edificio-tienda-dibujos-animados_138676-2085.jpg?w=2000' alt='logo' onClick={() => navigate("/")} /></div>
            <Button variant="text" className="button-nav" onClick={() => navigate2("/products")}>Products</Button>
            <input className='search' placeholder='Search...' type='text' />

        {/*</div>
        <div className='container-nav2'>*/}
            {veriLogin ? (
                <div className='container-logOut'>
                    <Button  variant="text" className="button-nav" onClick={() => navigate5(`/Profile/${veriLogin.name.firstname}`)}>Welcome {veriLogin.name.firstname}</Button>
                    {/*<Button variant="text" className="button-nav" onClick={() => logout()}>Log Out</Button>*/}
                </div>)
                : (<Button variant="text" className="button-nav" onClick={() => navigate4("/Users")}>Log In</Button>
                )}
            <Button variant="contained" startIcon={<AddShoppingCartIcon />} className="button1" onClick={() => navigate3("/Carrito")}>
                ( {context.shareTotal[0].totalUnits} )
            </Button>
        </div>
    </div>


    )
}