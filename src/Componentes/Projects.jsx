
import { motion } from 'framer-motion'
import { useState } from 'react'
import DateCalendarValue from './Calendario';
import DigitalClock from './DigitalClock';
import ProjectRight from './ProjectRight';
import ProjectsGalery from './ProjectsGalery';
import ProjectsMedidaMobil from './ProjectsMedidaMobil';





const Projects = () => {

  const currentDate = new Date().toDateString();

  const [arrowToggleWeb, setArrowToggleWeb] = useState(true);
  const [arrowToggleMobil, setArrowToggleMobil] = useState(true);
  const [open, setOpen] = useState(true);
  const [desktopI, setDesktopI] = useState(true);
  const [ulActiv, setUlActiv] = useState(true);


  const [proyectsMac, setProyectsMac] = useState(false);

  // motion

  const [motioDisplay, setMotioDisplay] = useState(true)



  const handleOpenWeb = () => {
    setArrowToggleWeb(!arrowToggleWeb)
    setProyectsMac(true)
  }

  const handleOpenMobil = () => {
    setArrowToggleMobil(!arrowToggleMobil)
  }

  const openProMobil = (e) => {
    console.log('hi2')
  }

  const handleDesktop = (e) => {
    setDesktopI(!desktopI)
    setUlActiv(!ulActiv)
    setProyectsMac(false)
  }

  const handleOpenExplore = (e) => {
    setOpen(!open)
  }

  //motion

  const motionOpen = (e) => {
    setMotioDisplay(!motioDisplay)
  }

  //proyectos mac explore

  const showProyectMac = (e) => {
    setProyectsMac(!proyectsMac)
    setDesktopI(!desktopI)
    setUlActiv(!ulActiv)
    // setArrowToggleWeb(!arrowToggleWeb)
  }
  

  

  return (
    
    <section id='projects' className='projects'>  

    
      {/* MACBOOCK */}

      <div className="mac">
        <div className="fondo-mac">

          <section className='container-mac-navBar'>
            <div className='barra-superior-mac'>
              <ul className='barra-L'>
              
                <li className='bi-apple-i'><i className="bi bi-apple"></i></li>
                {/* <i className="bi bi-apple"></i> */}
                <li onClick={handleOpenExplore}>File</li>
                <li onClick={motionOpen}>View</li>
              
              </ul>

              <div className='barra-R'>
                <i className="bi bi-battery-full"></i>
                <i className="bi bi-wifi"></i>
                <span>{currentDate}</span>
                <span><DigitalClock/></span>
              </div>
            </div>
            <nav>
                <ul>
                    
                    <li onClick={handleOpenExplore}><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span><i className="bi bi-laptop"></i></span></li>
                    <li><span><i className="bi bi-phone"></i></span></li>
                    <li><div className='linea'></div></li>
                    
                    <li><span></span></li>

                </ul>
            </nav>
          </section>

          <div className="widget-mac">
            <DateCalendarValue/>
          </div>
          

          <section className={ open ? 'explorador' : 'explorador active' }>

            <div className="mostrador-mac">

              <div className="mostrador-mac-superior">

                <ul className="intection-mac">
                  <li onClick={handleOpenExplore}><span className='ekist'>x</span></li>
                  <li onClick={handleOpenExplore}><span>-</span></li>
                  <li><span><i className="bi bi-caret-left-fill"></i><i className="bi bi-caret-right-fill"></i></span></li>
                </ul>

                <div className={proyectsMac ? "next-back-mac active" : "next-back-mac"}>
                  
                  <div onClick={showProyectMac} className="back-mac">&#60;</div>
                  <div className="next-mac">&#62;</div>

                </div>

              </div>

              <div className="project-mac">

                <span>Proyectos</span>

                <section>
                  <div onClick={handleDesktop} className='desktop'><i className={desktopI ? 'bi bi-caret-down-fill' : 'bi bi-caret-down-fill active'}></i><span>Desktop</span></div>
                  <ul className={ulActiv ? 'noActive' : 'noActive active'}>
                    <li onClick={handleOpenWeb}>
                      <span className={arrowToggleWeb ? 'fill-15' : 'fill-15 active'}><i className='bi bi-caret-down-fill'></i></span>
                      <i className="bi bi-laptop"></i> 
                      Web App 
                    </li>
                    <div className={arrowToggleWeb ? "li-items-web" : "li-items-web active"}>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Biwedex</li>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Progress</li>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Progress</li>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Progress</li>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Progress</li>
                    </div>
                      
                    

                    <li onClick={handleOpenMobil}><span className={arrowToggleMobil ? 'fill-15' : 'fill-15 active'}><i className='bi bi-caret-down-fill'></i></span> <i className="bi bi-phone"></i> Mobil App</li>
                    <div className={arrowToggleMobil ? "li-items-mobil" : "li-items-mobil active"}>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Progress</li>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Progress</li>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Progress</li>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Progress</li>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Progress</li>
                    </div>
                      
                    
                  </ul>
                </section>
                
              </div>
              
            </div>

            <div className="content-explo-mac">
              
              <section className='explo-mac-superior'>
                <div className={proyectsMac ? "inicio-expl active" : "inicio-expl"}>
                  <span>Disk Drill</span>
                  <span>2 articulo(s)</span>
                </div>

                <div className={proyectsMac ? "proyect-number active" : "proyect-number"}>
                  <span>Proyectos</span>
                  <span>5 articulo(s)</span>
                </div>
                  
              </section>

              <div className="sect-content-mac">

                
                <div className="explo-mac-content">

                  <div className={proyectsMac ? "explo-mac-proyects active" : "explo-mac-proyects"}>
                       <div onDoubleClick={showProyectMac} className='proyectos-web'>

                          <div></div>
                          <span>Proyectos Web</span>
                         

                        </div>
                        
                        <div onDoubleClick={openProMobil} className='proyectos-mobil'>

                          <div></div>
                          <span>Proyectos Mobil</span>
                        

                        </div>

                        
                  </div>

                  <div className={proyectsMac ? "proyects-web-indi active" : "proyects-web-indi"}>
                    <ul>
                      <a href="https://yony1990.github.io/BIWEDEX/">
                        <li className='Biwedex-cursor'>
                          <i className="bi bi-file-earmark-break-fill"></i>
                          <span>Biwedex</span>
                        </li>
                      </a>

                      <a href="">
                        <li>
                          <i className="bi bi-file-earmark-break-fill"></i>
                          <span>Progress</span>
                        </li>
                      </a>

                      <a href="">
                        <li>
                          <i className="bi bi-file-earmark-break-fill"></i>
                          <span>Progress</span>
                        </li>
                      </a>

                      <a href="">
                        <li>
                          <i className="bi bi-file-earmark-break-fill"></i>
                          <span>Progress</span>
                        </li>
                      </a>

                      <a href="">
                        <li>
                          <i className="bi bi-file-earmark-break-fill"></i>
                          <span>Progress</span>
                        </li>
                      </a>                 
                      
                    </ul>
                  </div>
                  
          
                </div>

                <section className='explo-mac-lateral'>

                  <div className={proyectsMac ? "explication active" : "explication"}>

                    <i className="bi bi-apple"></i>

                    <p>Es fundamental mantener un portafolio actualizado y atractivo. Sin embargo, hay proyectos en progreso que requieren tiempo y dedicación para alcanzar su máximo potencial. Estoy comprometido a perfeccionarlos antes de añadirlos, asegurando reflejar mis habilidades y creatividad de manera óptima.</p>

                  </div>

                  <div className={proyectsMac ? "proyecto-description active" : "proyecto-description"}>
                    
                    <i className="bi bi-code-slash"></i>

                    <span>BIWEDEX: Este proyecto está diseñado y desarrollado para presentar las ofertas de servicios, incluyendo la creación de páginas web.</span>

                    

                  </div>
                  
                  
                
                </section>

              </div>
              

            </div>

          </section>

          {/* MOTION */}


          <motion.div className={motioDisplay ? "container-projects" : "container-projects active"}>
              
              <div onClick={motionOpen} className="backMotion"></div>
              <ProjectsGalery />
              
          </motion.div>

        </div>
      </div>

      {/* proyecto medida mobil */}

      <ProjectsMedidaMobil/>

      {/* PROYECTO DERECHA */}

      <section><ProjectRight/></section>
      
    </section>
  )
}

export default Projects
