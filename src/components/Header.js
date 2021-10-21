import React, { useEffect, useRef } from 'react'

function Header() {

    const navBtn = useRef()
    const navBtnUp = useRef()
    const navBtnMiddle = useRef()
    const navBtnBottom = useRef()
    const navMenu = useRef()
    const Sun = useRef()
    const Moon = useRef()
    const themeBtn = useRef()

    function navBtnClick() {
        navMenu.current.classList.toggle('show__menu')
        navBtnUp.current.classList.toggle('toggle_up')
        navBtnMiddle.current.classList.toggle('toggle_middle')
        navBtnBottom.current.classList.toggle('toggle_bottom')
    }


    let darkTheme = 'dark__theme'
    let hideIcon = 'hide'
    let selectedTheme = localStorage.getItem('selected-theme')
    let selectedIcon = localStorage.getItem('selected-icon')
    const getCurrentTheme = () => (document.body.classList.contains(darkTheme)) ? 'dark__theme' : null
    const getCurrentIcon = () => (document.body.classList.contains(darkTheme)) ? null : 'hide'

    useEffect(() => {
        if(selectedTheme === 'dark__theme'){
            document.body.classList.add(darkTheme)
            Moon.current.classList.add(hideIcon)
            Sun.current.classList.remove(hideIcon)
        } else {
            document.body.classList.remove(darkTheme)
            Moon.current.classList.remove(hideIcon)
            Sun.current.classList.add(hideIcon)
        }
    }, [])
    
    
    function themeBtnClick() {
        Moon.current.classList.toggle(hideIcon)
        Sun.current.classList.toggle(hideIcon)
        document.body.classList.toggle(darkTheme)
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    }


    return (
        <div className="header bd-container">
            <div className="logo">
                <h1>BLANCHE</h1>
                <svg
                    className="logo__svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="523"
                    height="262"
                    viewBox="0 0 523 262">
                    <g>
                        <path
                            fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeOpacity="1" strokeMiterlimit="4" strokeDasharray="none"
                            d="m 108.20418,212.76102 c 24.72123,-11.75271 49.44154,-23.50499 79.12716,-45.99723 29.68561,-22.49224 64.33388,-55.72215 81.86166,-84.191675 17.52779,-28.469519 17.93303,-52.176219 11.04392,-63.017672 -6.88911,-10.841452 -21.07261,-8.815238 -37.58765,1.012538 -16.51504,9.827775 -35.35921,27.456192 -52.07641,49.137989 -16.71719,21.681796 -31.30623,47.41524 -40.12065,64.94292 -8.81442,17.52769 -11.8538,26.84847 -15.39985,39.81698 -3.54604,12.9685 -7.59847,29.58346 -6.48384,35.35812 1.11463,5.77465 7.39602,0.70902 12.86757,-0.20234 5.47156,-0.91136 10.13195,2.33065 9.82729,8.5107 -0.30466,6.18006 -5.57292,15.2982 -11.34777,22.28875 -5.77484,6.99056 -12.05623,11.85357 -15.50094,11.75281 -3.44471,-0.10076 -4.05259,-5.1664 -0.60779,-10.43543 3.4448,-5.26904 10.94195,-10.73993 23.20138,-16.7176 12.25944,-5.97768 29.27998,-12.46169 54.71058,-14.8931 25.43061,-2.43141 59.26906,-0.81041 89.66381,2.83707 30.39476,3.64749 57.34395,9.321 82.36869,9.01678 25.02474,-0.30422 48.12405,-6.58561 65.85412,-12.76588 17.73008,-6.18027 30.09023,-12.25903 42.45022,-18.33772"
                            id="path849" />
                    </g>
                </svg>
            </div>
            <div className="nav__menu bd-container" id="nav__menu" ref={navMenu}>
                <ul className="nav__list">
                    <li className="nav__item"><a className="nav__link" href="#shop">SHOP</a></li>
                    <li className="nav__item"><a className="nav__link" href="#about">OUR STORY</a></li>
                    <li className="nav__item"><a className="nav__link" href="#expertise">EXPERTISE</a></li>
                    <li className="nav__item nav__mobile"><a className="nav__link" href="#shop">CONTACT</a></li>
                    <div className="search__box nav__mobile">
                        <input type="search" className="search__box__input nav__mobile" />
                        <button className="search__box__btn nav__mobile"><svg className="nav__svg nav__mobile" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--text-color)"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></button>
                    </div>
                    <li className="theme__button" id="theme__button" ref={themeBtn} onClick={() => themeBtnClick()}>
                        <svg className="moon" id="moon" ref={Moon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--text-color)" ><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
                        </svg>
                        <svg className="sun hide" id="sun" ref={Sun} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--text-color)"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className="nav__btn" id="nav__btn" ref={navBtn} onClick={() => navBtnClick()}>
                <div className="nav__btn_up" id="nav__btn_up" ref={navBtnUp}></div>
                <div className="nav__btn_middle" id="nav__btn_middle" ref={navBtnMiddle}></div>
                <div className="nav__btn_bottom" id="nav__btn_bottom" ref={navBtnBottom}></div>
            </div>
            <ul className="nav__icons">
                <li className="nav__item" className="nav__link nav__desktop" href="#shop"><a>CONTACT</a></li>
                <li className="nav__icons__svg">
                    <div className="search__box nav__desktop">
                        <input type="search" className="search__box__input nav__desktop" />
                        <button className="search__box__btn nav__desktop"><svg className="nav__svg nav__desktop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--text-color)"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></button>
                    </div>
                    <svg className="nav__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="var(--text-color)"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                    <svg className="nav__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="var(--text-color)"><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg>
                </li>
            </ul>
        </div>
    )
}
export default Header
