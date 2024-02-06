import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-left'>
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>

        </div>

      
    </div>
  )
}

export default Hero
