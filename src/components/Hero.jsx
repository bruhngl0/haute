import React from 'react'
import '../styles/hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <video className='hero-video' autoPlay loop>
        <source src='white.mp4'    type='video/mp4' /> 
      </video>

      <img src = "colo.png" className='hc' />
      
    </div>
  )
}

export default Hero

