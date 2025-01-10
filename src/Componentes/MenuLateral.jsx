
import { menuOpen } from '../helps/menuOpen'
import { Link } from 'react-scroll'


const MenuLateral = () => {


  const handleMenu = () => {

    menuOpen();
    console.log("huu")
    
    
  }
 
  return (
    <div className='menux' onClick={handleMenu}>

      <div className="content-user">
        <figure className="user"></figure>
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
          <button>Linkeding</button>
          <a href="https://wa.me/59891771888"><button>Whatsapp</button></a>    
        </div>
        
      </div>
      
    </div>
  )
}

export default MenuLateral
