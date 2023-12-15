import React,{useEffect}  from 'react'
import '../style/herosection.css'
import { motion, useAnimation } from 'framer-motion';


const HeroSection = () => {
    const dashboardAnimation = useAnimation();
    useEffect(() => {
        const handleScroll = () => {
          const scrollOffset = window.scrollY;
          const triggerOffset = 20; 
    
          if (scrollOffset > triggerOffset) {
            dashboardAnimation.start({ opacity: 1, y: 0, scale: 1 });
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [dashboardAnimation]);

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
                <motion.div 
                    className='content'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1.5 }}
                >
                    <p id='financial'>Financial Management</p>
                    <h1>A simpler, smarter basic credit <span className='card'>card.</span></h1>
                    <p>Your powerful companion on the road to financial success! Explore personal budget management, investment opportunities.</p>
                    <div>
                        <div>
                            <a className="appStore" href='./store'>
                                <div>
                                    <img src='https://framerusercontent.com/images/fVUy1acoLQhx2VAjG9IQqEBgQ.svg' alt='apple'/>
                                </div>
                                <div>
                                    <p>App Store</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='framer'>
                        <a href='/framer'>Made in Framer</a>
                    </div>
                </motion.div>
                <div className='dashboard-wrapper'>
                    <motion.div 
                        className='dashboard'
                        animate={dashboardAnimation}
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ duration: 1 }}
                    >
                        <img src='https://framerusercontent.com/images/1JFj3FwlaG94oqSBTQUOdyY6nHA.png?scale-down-to=1024' alt='dashboard'/>
                    </motion.div>
                    <div className='blurred-overlay'></div>
                </div>
            </div>
            <motion.div className='background-gradient' 
                initial={{ scale: 0.94}}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5}}
                >
                <img src='https://framerusercontent.com/images/hY7dz3uD5cYp9mzioTBHqQvUw.png?scale-down-to=1024' alt='gradient'/>
            </motion.div>
            

        </div>
    </div>
  )
}

export default HeroSection