import { useEffect, useState } from 'react'
import '../assets/navstyles.css'
import { useNavigate } from 'react-router-dom'

export function MenuNav(props) {
    const navigate = useNavigate();
    const navigate2 = useNavigate();
    return (
        <div className='nav-container'>
            <div className="logo"><img className="img-nav" src='https://img.freepik.com/vector-gratis/carro-tienda-edificio-tienda-dibujos-animados_138676-2085.jpg?w=2000' alt='logo' onClick={() => navigate("/")} /></div>
            <div className="no-carr" onClick={() => navigate2("/products")}>Products</div>
            <div className="bestRated">Best Rated</div>
            <input className='search' placeholder='Search...' type='text' />
            <div className="user">User</div>
        </div>


    )
}