import React from 'react'
import svg1 from '../assets/svg1.png'
import svg2 from '../assets/svg2.png'
import svg3 from '../assets/svg3.png'
import svg4 from '../assets/svg4.png'

function Expertise() {

    return(
        <section className="expertise" id="expertise">
            <h2>Your Comfort Is Our #1 Priority</h2>
            <div className="expertise__data bd-grid">
                <div className="expertise__data__card">
                    <img className="expertise__data__card__img" src={svg1} />
                    <h4>Quality Products</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do</p>
                </div>
                <div className="expertise__data__card">
                    <img className="expertise__data__card__img" src={svg2} />
                    <h4>Lifetime Warranty</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do</p>
                </div>
                <div className="expertise__data__card">
                    <img className="expertise__data__card__img" src={svg3} />
                    <h4>Stress-free Shopping</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do</p>
                </div>
                <div className="expertise__data__card">
                    <img className="expertise__data__card__img" src={svg4} />
                    <h4>Fair Prices</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do</p>
                </div>
            </div>
        </section>
    )
}
export default Expertise