import React from 'react'
import { Link } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import './navbar.scss'
const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='container'>
                    <div>
                        <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_dark.png" alt="" />
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/fav">Fav</Link></li>
                        </ul>
                    </div>
                    <div className='buttons'>
                        <SlBasket className='basket' />
                        <button>BUY NOW</button>
                    </div>
                </div>
            </nav>
            <section id='head'>
                <div className='container'>
                    <h1>Lifestyle Smart <p>Watch</p></h1>
                    <p>Technology of the Future</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo unde inventore enim eius quibusdam soluta quas quos a nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis ?
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Navbar