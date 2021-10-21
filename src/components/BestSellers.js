import React from 'react'
import bsItem1 from '../assets/bs-item-1.jpg'
import bsItem2 from '../assets/bs-item-2.jpg'
import bsItem3 from '../assets/bs-item-3.jpg'

function BestSellers() {

    return (
        <section className="bestSellers">
            <h2 className="bestSellers__title">Best Sellers</h2>
            <div className="bs bd-grid">
                <div className="bs__item">
                    <img className="bs__item__img" src={bsItem1} />
                    <h4 className="bs__item__subtitle">Product Name</h4>
                    <p>AED XXXX</p>
                </div>
                <div className="bs__item">
                    <img className="bs__item__img" src={bsItem2} />
                    <h4 className="bs__item__subtitle">Product Name</h4>
                    <p>AED XXXX</p>
                </div>
                <div className="bs__item">
                    <img className="bs__item__img" src={bsItem3} />
                    <h4 className="bs__item__subtitle">Product Name</h4>
                    <p>AED XXXX</p>
                </div>
            </div>
        </section>
    )
}
export default BestSellers