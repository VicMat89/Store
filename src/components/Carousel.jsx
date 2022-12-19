import React, { Component } from 'react';
import '../assets/App.css';
import Carousel from 'nuka-carousel';

function DemoCarousel(props) {

    return (
        <Carousel className='Carousel'>
            <img className='one' src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
            <img className='one' src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" />
            <img className='one' src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" />
            <img className='one' src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" />
        </Carousel>
      
    )
    }
    export default DemoCarousel;


