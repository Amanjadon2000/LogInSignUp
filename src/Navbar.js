import React from 'react'
import './index.css';
const Navbar = () => {
  return (  
      <div className='hero2'>

    <h2>Aman's blog</h2>
    <div className='nav'>
   
        <div id='home'>
            <a href='/'>Home</a>
            
        </div>
        <div id='about'>
            <a href='/'>About</a>
        </div>
    </div>
      </div>
  )
}

export default Navbar
