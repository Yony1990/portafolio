
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
  const [desktopI, setDesktopI] = useState(true)
  const [ulActiv, setUlActiv] = useState(true)

  // motion

  const [motioDisplay, setMotioDisplay] = useState(true)



  const handleOpenWeb = () => {
    setArrowToggleWeb(!arrowToggleWeb)
  }

  const handleOpenMobil = () => {
    setArrowToggleMobil(!arrowToggleMobil)
  }

  const openProWeb = (e) => {
    console.log('hi')
  }

  const openProMobil = (e) => {
    console.log('hi2')
  }

  const handleDesktop = (e) => {
    setDesktopI(!desktopI)
    setUlActiv(!ulActiv)
  }

  const handleOpenExplore = (e) => {
    setOpen(!open)
  }

  //motion

  const motionOpen = (e) => {
    setMotioDisplay(!motioDisplay)
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
                  <li onClick={handleOpenExplore}><span>x</span></li>
                  <li onClick={handleOpenExplore}><span>-</span></li>
                  <li><span><i className="bi bi-caret-left-fill"></i><i className="bi bi-caret-right-fill"></i></span></li>
                </ul>

                <div className="next-back-mac">
                  
                  <div className="back-mac">&#60;</div>
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
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Project 1</li>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Project 1</li>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Project 1</li>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Project 1</li>
                        <li className='li-ITEM'><i className="bi bi-laptop"></i> Project 1</li>
                    </div>
                      
                    

                    <li onClick={handleOpenMobil}><span className={arrowToggleMobil ? 'fill-15' : 'fill-15 active'}><i className='bi bi-caret-down-fill'></i></span> <i className="bi bi-phone"></i> Mobil App</li>
                    <div className={arrowToggleMobil ? "li-items-mobil" : "li-items-mobil active"}>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Project 1</li>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Project 1</li>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Project 1</li>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Project 1</li>
                        <li className='li-ITEM'><i className="bi bi-phone"></i> Project 1</li>
                    </div>
                      
                    
                  </ul>
                </section>
                
              </div>
              
            </div>

            <div className="content-explo-mac">
              
              <section className='explo-mac-superior'>
                  <span>Disk Drill</span>
                  <span className="">2 articulo(s)</span>
              </section>

              <div className="sect-content-mac">

                
                <div className='explo-mac-content'>

                  <div className="explo-mac-proyects">
                       <div onDoubleClick={openProWeb} className='proyectos-web'>

                          <div></div>
                          <span>Proyectos Web</span>
                         

                        </div>
                        
                        <div onDoubleClick={openProMobil} className='proyectos-mobil'>

                          <div></div>
                          <span>Proyectos Mobil</span>
                        

                        </div>

                        
                  </div>
                  
          
                </div>

                <section className='explo-mac-lateral'>
                
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
