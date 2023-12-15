import React from 'react'
import '../style/herosection.css'

const HeroSection = () => {
  return (
    <div className='herosection'>
        <div className='navbar'>
            <div>
                <img src='https://framerusercontent.com/images/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg' alt='logo'/>
            </div>
            <div className='menu'>
                <a href='./product'>Product</a>
                <a href='./product'>Compare</a>
                <a href='./product'>Pricing</a>
                <a href='./product'>Contact</a>
            </div>
            <div className='login'>
                <a href='./product'>Login</a>
                <a href='./product' className='talk'>
                    <span>Let's Talk</span>
                    <img src='https://framerusercontent.com/images/bXtqf2PjaTT8OFF6x6dkokeqL4k.svg' alt='arrow' /> 
                </a>
            </div>
        </div>
        <div>
            <div className='container'>
                <div>
                    <p>Financial Management</p>
                    <h1>A simpler, smarter basic</h1>
                    <h1>credit <span className='card'>card.</span></h1>
                    <div>
                        <p>Your powerful companion on the road to financial success! Explore personal budget management, investment opportunities.</p>
                    </div>
                </div>
                <div>
                    <img src='https://framerusercontent.com/images/1JFj3FwlaG94oqSBTQUOdyY6nHA.png?scale-down-to=1024' alt='dashboard'/>
                </div>
            </div>
            <div className='background-gradient'>
                <img src='https://framerusercontent.com/images/hY7dz3uD5cYp9mzioTBHqQvUw.png?scale-down-to=1024' alt='gradient'/>
            </div>

        </div>
    </div>
  )
}

export default HeroSection