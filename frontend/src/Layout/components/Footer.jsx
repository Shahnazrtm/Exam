import React from 'react'
import { Link } from 'react-router-dom'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcJcb } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './footer.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div><img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                    <ul className='ul'>
                        <li><Link><FaCcVisa /></Link></li>
                        <li><Link><FaCcMastercard /></Link></li>
                        <li><Link><CiCreditCard1 /></Link></li>
                        <li><Link><FaCcPaypal /></Link></li>
                        <li><Link><FaCcJcb /></Link></li>
                    </ul>
                    <div className='icons'>
                        <FaLock />
                        <p>Secure online payment</p>
                    </div>
                </div>
                <div>
                    <h4>BEST EXPERIENCE</h4>
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Shipment</Link>
                        </li>
                        <li>
                            <Link>Returns</Link>
                        </li>
                        <li>
                            <Link>Gift cards</Link>
                        </li>
                        <li>
                            <Link>Policies</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>COMPANY</h4>
                    <ul>
                        <li>
                            <Link>About us</Link>
                        </li>
                        <li>
                            <Link>Press</Link>
                        </li>
                        <li>
                            <Link>Offices</Link>
                        </li>
                        <li>
                            <Link>Affiliates</Link>
                        </li>
                        <li>
                            <Link>Giveaway</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='end'>Copyright © 2018 JevelinTheme - Theme by Shufflehound</p>

        </div>
    )
}

export default Footer





