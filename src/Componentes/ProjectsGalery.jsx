
import { motion } from 'framer-motion'


const ProjectsGalery = ({props: {setMusicReproduction, setOpen, setMotioDisplay}}) => {
   
  const handleMusic = () => {
    setMusicReproduction(true)
    setOpen(true)
    setMotioDisplay(true)
  }
  
    return (
        <>
            
          {/* MOTION */}

          <motion.div className="content-projects" drag='x' dragConstraints={{right: 0, left: -2238.15 }}>

              <motion.div>
                
                <div className="anima-icons-motion">
                  <i className="bi bi-arrow-left"></i>
                </div>
                
              </motion.div>
              <motion.div className="item ">
                <div className="project-1 junt"></div>
                <div className="content-img-Proyect">
                  <figure className='img-Project'></figure>
                </div>
                
                <div className="proyect-info">
                    <span>BIWEDEX</span>
                    <article>Este proyecto está diseñado y desarrollado para presentar las ofertas de servicios, incluyendo la creación de páginas web. </article>
                    <a className='apg' href="https://yony1990.github.io/BIWEDEX/">
                      <button>Open</button>
                    </a>
                    
                    <div className="lenguajes-usadas pro-1">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure className='grop-2-1'></figure>
                        
                      </div>
                    </div>
                </div>
                
              </motion.div>

              <motion.div className="item ">
                <div className="project-1 junt"></div>
                <div className="content-img-Proyect">
                  <figure className='img-music'></figure>
                </div>
                
                <div className="proyect-info musicSkills">
                    <span>MUSIC</span>
                    <article>Este proyecto es un reproductor de Música Local que aloja una lista de mis canciones Favoritas. espero que puedan DISFRUTAR. </article>
                    
                      <button onClick={handleMusic} >Open</button>

                    <div className="lenguajes-usadas pro-1">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure className='grop-2-1'></figure>
                        <figure className='grop-2-2'></figure>
                      </div>
                    </div>
                </div>
                
              </motion.div>

              <motion.div className="item ">
                <div className="project-1 junt"></div>
                <div className="content-img-Proyect">
                  <figure className='img-progress'></figure>
                </div>
                
                <div className="proyect-info">
                    <span>Progress</span>
                    <article>El proyectos está en progreso que requieren tiempo y dedicación para alcanzar su máximo potencial. </article>
                    <a className='apg' href="">
                      <button>Open</button>
                    </a>
                    
                    <div className="lenguajes-usadas pro-1">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure className='grop-2-1'></figure>
                        
                      </div>
                    </div>
                </div>
                
              </motion.div>

              <motion.div className="item ">
                <div className="project-1 junt"></div>
                <div className="content-img-Proyect">
                  <figure className='img-portfolio'></figure>
                </div>
                
                <div className="proyect-info musicSkills">
                    <span>PORTFOLIO</span>
                    <article>Este proyecto es mi Portafólio donde muestro mis habilidades. Dentro pueden encontrar también manejos de APIs y Librerias NPM. </article>
                    <a className='apg' href="">
                      <button>Open</button>
                    </a>
                    
                    <div className="lenguajes-usadas pro-1">
                    <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure className='grop-2-1'></figure>
                        <figure className='grop-2-2'></figure>
                      </div>
                    </div>
                </div>
                
              </motion.div>

              <motion.div className="item ">
                <div className="project-1 junt"></div>
                <div className="content-img-Proyect">
                  <figure className='img-game'></figure>
                </div>
                
                <div className="proyect-info">
                    <span>GAME</span>
                    <article>Este Juego está basado en la búsqueda del número correcto. Consta de 3 niveles y una pista dentro del juego. QUE LO DISFRUTES. </article>
                    <a className='apg' href="">
                      <button>Open</button>
                    </a>
                    
                    <div className="lenguajes-usadas pro-1">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure className='grop-2-1'></figure>
                        
                      </div>
                    </div>
                </div>
                
              </motion.div>

          </motion.div>

          

        </>
    );
}

export default ProjectsGalery;