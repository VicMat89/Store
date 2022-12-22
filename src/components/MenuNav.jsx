import '../assets/navstyles.css'
import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { useAppContextTotal } from "../context/contextTotal";
import { useAppContextUsers } from "../context/contextUsers";
import { useNavigate } from 'react-router-dom'


export function MenuNav(props) {
    const context = useAppContextTotal();
    const contextUser = useAppContextUsers();
    const navigate = useNavigate();

    let veriLogin = contextUser.sharedUsers.find((x) => x.isLogin === true)

    return (<div className='nav-container'>
        <div className='container-nav1'>
            <h1 className='title-nav' onClick={() => navigate("/")}>REACTSTORE</h1>
            <div>
            <Button variant="text" className="button-nav" onClick={() => navigate("/products")}>Products</Button>
            <Button variant="text" className="button-nav" >about</Button>
            <Button variant="text" className="button-nav" >Contact</Button>
            </div>
            {veriLogin ? (
                <div className='container-logOut'>
                    <Button variant="text" className="button-nav" onClick={() => navigate(`/Profile/${veriLogin.name.firstname}`)}>Welcome {veriLogin.name.firstname}</Button>

                </div>)
                : (<Button variant="text" className="button-nav" onClick={() => navigate("/Users")}>Log In</Button>
                )}
            <Button variant="contained" startIcon={<AddShoppingCartIcon />} className="button1" onClick={() => navigate("/Carrito")}>
                ( {context.shareTotal[0].totalUnits} )
            </Button>
        </div>
    </div>


    )
}