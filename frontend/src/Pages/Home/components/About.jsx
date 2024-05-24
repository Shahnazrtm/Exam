import React from 'react'
import './about.scss'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
    return (
        <div className='about'>
            <div className='container' >
                <h1>What our customers say</h1>
                <div className='profil'>
                    <IoIosArrowBack className='icon' />
                    <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/tyler-nix-626668-unsplash2.jpg" alt="" />
                    <IoIosArrowForward className='icon' />

                </div>
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quis illum quod fugit molestiae earum beatae delectus totam mollitia nulla, fuga provident numquam fugiat harum quasi ipsam adipisci, laboriosam maxime, nam voluptates ium optio perferendis natus fugit earum distinctio at nihil, alias ullam. Natus, nisi libero?</p>
                <p className='name'>Maggie Wilson</p>
                <p className='nine'>99</p>
            </div>
        </div>
    )
}

export default About