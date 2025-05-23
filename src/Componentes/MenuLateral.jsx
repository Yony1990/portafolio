
import { menuOpen } from '../helps/menuOpen'
import { Link } from 'react-scroll'
import user1 from './img/menux_img100.jpg'


const MenuLateral = () => {

  const handleMenu = () => {
    menuOpen();
  }
 
  return (
    <div className='menux' onClick={handleMenu}>

      <div className="content-user">
        <img className="user" src={user1} alt="user" />
        <span>Yonimiler Cárdenas</span>
        <span>Frontend Developer React JS</span>
      </div>

      <div className="linea"></div>
      
      <ul>
      
          
          <li>
            
            <Link 
                className='link' 
                onClick={handleMenu}
                to = "principal"  
                href='principal'
                spy = { true }  
                smooth = { true }  
                offset = { 0 }  
                duration = { 1000 }  
                ><i className="bi bi-house"></i>HOME
            </Link>
            <Link 
                className='link' 
                onClick={handleMenu}
                to='projects'
                href='projects'
                spy = { true }  
                smooth = { true }  
                offset = { 0 }  
                duration = { 1000 }  
                ><i className="bi bi-file-earmark-code"></i>PROJECTS
            </Link>
           
          </li>
       
      </ul>

      <div className="linea"></div>

      <div className='trabajemos'>

        <div className="spans">
          <span>¿Tienes algún proyecto?</span><br />
          <span>¡Trabajemos Juntos!</span>
        </div>
        
        <div className="btnsTrab">
          <a href="https://www.linkedin.com/in/yonimiler-c%C3%A1rdenas-mach%C3%ADn-836a11261/"><button>Linkeding</button></a>
          <a href="https://wa.me/59891771888"><button>Whatsapp</button></a>    
        </div>
        
      </div>
      
    </div>
  )
}

export default MenuLateral
