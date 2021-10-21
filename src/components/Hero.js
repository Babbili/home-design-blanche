import React from 'react'
import heroImg from '../assets/hdhero.JPG'

function Hero(){



    return(
        <section className="hero">
        <img className="hero__img" src={heroImg} />
        <h2>Super Soft, Stylish Bed Linen Made With Love</h2>
        </section>
    )
}
export default Hero