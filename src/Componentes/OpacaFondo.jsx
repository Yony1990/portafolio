import React from 'react'
import { menuOpen } from '../helps/menuOpen'

const OpacaFondo = () => {

    const handleMenu = () => {
        menuOpen() 
    }

  return (
    <div onClick={handleMenu} className='opacar'>
      
    </div>
  )
}

export default OpacaFondo
