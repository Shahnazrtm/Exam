import React from 'react'
import { CiMicrophoneOn } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import './splendid.scss'
const Splendid = () => {
  return (
    <div className='splendid container'>
      <div>
        <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Replace-screen-inside-this-SO3-1.jpg" alt="" />
      </div>
      <div className='texts'>
        <div className='text'>
          <p><b>MEET WITH OUR</b></p>
          <h3>Splendid Teatures</h3>
        </div>
        <div className='icon-text'>
          <CiMicrophoneOn className='icon' />
          <div>
            <h4>Voice Recognition</h4>
            <p>Lorem ipsum dolor sit amet, con
              sectetur adipiscing elit. Mauris</p>
          </div>
        </div>
        <div className='icon-text'>
          <GiSmartphone className='icon'/>
         <div>
         <h4>Connect with your phone</h4>
          <p>Lorem ipsum dolor sit amet, con
            sectetur adipiscing elit. Mauris</p>
         </div>
        </div>
        <div className='icon-text'>
          <FaWifi className='icon'/>
          <div><h4>Any task at hand</h4>
          <p>Lorem ipsum dolor sit amet, con
            sectetur adipiscing elit. Mauris</p></div>
        </div>
      </div>
    </div>
  )
}

export default Splendid