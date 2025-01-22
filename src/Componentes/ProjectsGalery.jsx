
import { motion } from 'framer-motion'


const ProjectsGalery = () => {
   
  

    return (
        <>
            
          {/* MOTION */}

          <motion.div className="content-projects" drag='x' dragConstraints={{right: 0, left: -1936 }}>

              <motion.div>
                
                <div className="anima-icons-motion">

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
                        {/* <figure></figure> */}
                      </div>
                    </div>
                </div>
                
              </motion.div>
              <motion.div className="item">
                <div className="project-2 junt"></div>
                <div className="proyect-info">
                    <span>Nombre del Proyecto</span>
                    <article>Aserca del proyecto mas bien un contenido mas largo y mas directo al tema.</article>
                    <button>Open</button>
                    <div className="lenguajes-usadas">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure></figure>
                        <figure></figure>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <div className="project-3 junt"></div>
                <div className="proyect-info">
                    <span>Nombre del Proyecto</span>
                    <article>Aserca del proyecto mas bien un contenido mas largo y mas directo al tema.</article>
                    <button>Open</button>
                    <div className="lenguajes-usadas">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure></figure>
                        <figure></figure>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <div className="project-4 junt"></div>
                <div className="proyect-info">
                    <span>Nombre del Proyecto</span>
                    <article>Aserca del proyecto mas bien un contenido mas largo y mas directo al tema.</article>
                    <button>Open</button>
                    <div className="lenguajes-usadas">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure></figure>
                        <figure></figure>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <div className="project-5 junt"></div>
                <div className="proyect-info">
                    <span>Nombre del Proyecto</span>
                    <article>Aserca del proyecto mas bien un contenido mas largo y mas directo al tema.</article>
                    <button>Open</button>
                    <div className="lenguajes-usadas">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure></figure>
                        <figure></figure>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <div className="project-6 junt"></div>
                <div className="proyect-info">
                    <span>Nombre del Proyecto</span>
                    <article>Aserca del proyecto mas bien un contenido mas largo y mas directo al tema.</article>
                    <button>Open</button>
                    <div className="lenguajes-usadas">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure></figure>
                        <figure></figure>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <div className="project-7 junt"></div>
                <div className="proyect-info">
                    <span>Nombre del Proyecto</span>
                    <article>Aserca del proyecto mas bien un contenido mas largo y mas directo al tema.</article>
                    <button>Open</button>
                    <div className="lenguajes-usadas">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure></figure>
                        <figure></figure>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <div className="project-8 junt"></div>
                <div className="proyect-info">
                    <span>Nombre del Proyecto</span>
                    <article>Aserca del proyecto mas bien un contenido mas largo y mas directo al tema.</article>
                    <button>Open</button>
                    <div className="lenguajes-usadas">
                      <div className="proyect-imgskills-grop-1">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                      </div>
                      <div className="proyect-imgskills-grop-2">
                        <figure></figure>
                        <figure></figure>
                      </div>
                    </div>
                </div>
              </motion.div>

          </motion.div>

          

        </>
    );
}

export default ProjectsGalery;