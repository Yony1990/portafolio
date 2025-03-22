
import { motion } from 'framer-motion'
import { useState } from 'react'
import DateCalendarValue from './Calendario';
import DigitalClock from './DigitalClock';
import ProjectRight from './ProjectRight';
import ProjectsGalery from './ProjectsGalery';
import ProjectsMedidaMobil from './ProjectsMedidaMobil';
import macImg from './img/mac/mac.png'
import fondoMac from './img/mac/fondo-natural.avif'
import Music from './music/Music';





const Projects = () => {

  const currentDate = new Date().toDateString();

  const [arrowToggleWeb, setArrowToggleWeb] = useState(true);
  const [arrowToggleMobil, setArrowToggleMobil] = useState(true);
  const [open, setOpen] = useState(true);
  const [desktopI, setDesktopI] = useState(true);
  const [ulActiv, setUlActiv] = useState(true);

  const [proyectsMac, setProyectsMac] = useState(false);

  // music

  const [musicReproduction, setMusicReproduction] = useState(false)
  const [muscle, setmuscle] = useState(false);
 

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
  }

  const showProyectMacNav = (e) => {
    setProyectsMac(true)
    setDesktopI(!desktopI)
    setUlActiv(false)
    setOpen(false)
  }

  const handleMusic = () => {
    setMusicReproduction(!musicReproduction)
    setOpen(true) 
  }

  const handleMusicTrue = () => {
    setMusicReproduction(true)
    setOpen(true)
  }


  
  return (
    
    <section id='projects' className='projects'>  

    
      {/* MACBOOCK */}

      <div className="mac">
        <img className='mac-img-content' src={macImg} alt="" />
        <div className="fondo-mac">
          <img className='fondo-mac-img-content' src={fondoMac} alt="" />
          
          <Music musicShow={{musicReproduction, setMusicReproduction}}/>

          <section className='container-mac-navBar'>
            <div className='barra-superior-mac'>
              <ul className='barra-L'>
              
                <li className='bi-apple-i'><i className="bi bi-apple"></i></li>
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
                    <li><a href="https://www.linkedin.com/in/yonimiler-c%C3%A1rdenas-mach%C3%ADn-836a11261/"><p>linkedin</p><span><i className="bi bi-linkedin"></i></span></a></li>
                    <li><a href="https://wa.me/59891771888"><p>whatsapp</p><span><i className="bi bi-whatsapp"></i></span></a></li>
                    <li><a href="https://github.com/Yony1990"><p>github</p><span><i className="bi bi-github"></i></span></a></li>
                    <li onClick={handleMusic}><span></span></li>
                    {/* <li><span></span></li> */}
                    <li onClick={showProyectMacNav}><span><i className="bi bi-laptop"></i></span></li>
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
                          <li className='li-ITEM'><i className="bi bi-laptop"></i> My Blog</li>
                          <li className='li-ITEM'><i className="bi bi-laptop"></i> Music</li>
                          <li className='li-ITEM'><i className="bi bi-laptop"></i> Ohana</li>
                          <li className='li-ITEM'><i className="bi bi-laptop"></i> Portfolio</li>
                          <li className='li-ITEM'><i className="bi bi-laptop"></i> Game</li>
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
                    <span>Proyectos Web</span>
                    <span>6 articulo(s)</span>
                  </div>
                    
                </section>

                <div className="sect-content-mac">

                  
                  <div className="explo-mac-content">

                    <div className={proyectsMac ? "explo-mac-proyects active" : "explo-mac-proyects"}>
                        <div onClick={showProyectMac} className='proyectos-web'>

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

                        <a href="https://yony1990.github.io/BLOG-S-YONY/">
                          <li className='Biwedex-cursor'>
                            <i className="bi bi-file-earmark-break-fill"></i>
                            <span>My Blog</span>
                          </li>
                        </a>
                        
                        <li onClick={handleMusicTrue} className='Music-cursor'>
                            <i className="bi bi-file-earmark-break-fill"></i>
                            <span>Music</span>
                        </li>

                        <a href="https://yony1990.github.io/OHANA/">
                          <li>
                            <i className="bi bi-file-earmark-break-fill"></i>
                            <span>Ohana</span>
                          </li>
                        </a>

                        <a href="https://yony1990.github.io/portafolio/">
                          <li className='Portfolio-cursor'>
                            <i className="bi bi-file-earmark-break-fill"></i>
                            <span>Portfolio</span>
                          </li>
                        </a>

                        <a href="https://yony1990.github.io/Game/">
                          <li className='Game-cursor'>
                            <i className="bi bi-file-earmark-break-fill"></i>
                            <span>Game</span>
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

                      <span>MY BLOG: Este proyecto es mi Blog donde se pueden ver las ultimas noticias del mundo y mis deas fomentando la interacción y el aprendizaje.</span>

                      <span>MUSIC: Este proyecto en un reproductor de Música Local que aloja una lista de mis canciones Favoritas. espero que puedan DISFRUTAR.</span>

                      <span>OHANA: El proyectos es una Landing Page creada y diseñada para atraer a los usuarios de este sector de la Peluquería Canina.</span>

                      <span>PORTFOLIO: Este proyecto es mi Portafólio donde muestro mis habilidades. Dentro pueden encontrar también manejos de APIs y Librerias NPM.</span>

                      <span>GAME: Este Juego está basado en la búsqueda del número correcto. Consta de 3 niveles y una pista dentro del juego. QUE LO DISFRUTES.</span>

                    </div>
                    
                    
                  
                  </section>

                </div>
                

              </div>
            

          </section>
         

          {/* MOTION */}


          <motion.div className={motioDisplay ? "container-projects" : "container-projects active"}>
              
              <div onClick={motionOpen} className="backMotion"></div>
              <ProjectsGalery props={{setMusicReproduction, setOpen, setMotioDisplay}} />
              
          </motion.div>

        </div>
      </div>

      {/* proyecto medida mobil */}

      <ProjectsMedidaMobil />

      {/* PROYECTO DERECHA */}

      <section><ProjectRight/></section>
      
    </section>
  )
}

export default Projects
