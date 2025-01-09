import React, { useState } from 'react'
// import MenuLateral from './MenuLateral'
import { menuOpen } from '../helps/menuOpen'


const Header = () => {

  const handleMenu = () => {
    menuOpen()
  }
    
  return (
    <div className="container-header">
      <header className='header'>
        
          <div onClick={handleMenu} className="menu">
            <i className="bi bi-arrow-right-circle-fill arrow"></i>
            
          </div>
         
      </header>
    </div>
    
  )
}

export default Header
