import { useEffect, useState } from 'react'
import '../assets/navstyles.css'
 
 export function MenuNav(props){

    

    return(
        <div className='nav-container'>
            <div className="logo"><img src='https://img.freepik.com/vector-gratis/carro-tienda-edificio-tienda-dibujos-animados_138676-2085.jpg?w=2000' alt='logo'/></div>
            <div className="no-carr">Products</div>
            <div className="bestRated">Best Rated</div>
            <input className='search' placeholder='Search...' type='text'/>
            <div className="user">User</div>
        </div>


    )
}