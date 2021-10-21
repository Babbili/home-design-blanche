import React from 'react'
import shopItem1 from '../assets/shop-item-1.JPG'
import shopItem2 from '../assets/shop-item-2.JPG'
import shopItem3 from '../assets/shop-item-3.JPG'
import shopItem4 from '../assets/shop-item-4.JPG'

function Shop() {

    return(
        <section className="shop bd-grid">
            <div className="shop__item">
                <img className="shop__item__img" src={shopItem1} />
                <a className="button" href="">Shop<span className="button__space">Bed</span><span className="button__space">Linens</span></a>
            </div>
            <div className="shop__item">
                <img className="shop__item__img" src={shopItem2} />
                <a className="button" href="">Shop<span className="button__space">Bath</span><span className="button__space">Towels</span></a>
            </div>
            <div className="shop__item">
                <img className="shop__item__img" src={shopItem3} />
                <a className="button" href="">Shop<span className="button__space">Bath</span><span className="button__space">Robes</span></a>
            </div>
            <div className="shop__item">
                <img className="shop__item__img" src={shopItem4} />
                <a className="button" href="">Shop<span className="button__space">Home</span><span className="button__space">Fragrances</span></a>
            </div>
        </section>
    )
}
export default Shop