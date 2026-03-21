import React from 'react'

import merca from './img/projectsImg/cool/Mercadito.png';
import calor from './img/projectsImg/cool/calor1.jpg';
import feel from './img/projectsImg/cool/feel1.jpg';
import jet from './img/projectsImg/cool/jet1.jpg';

import blog from './img/projectsImg/cool/blog.png';
import repro from './img/projectsImg/cool/reproductor.webp';
import porta from './img/projectsImg/cool/portafolio.webp';
import game1 from './img/projectsImg/cool/game.webp';
import biwe from './img/projectsImg/cool/biwedex.webp';
import ohana1 from './img/projectsImg/cool/ohana.webp';

const ProjectsMedidaMobil = () => {
  return (
    <>
    
        <h3 className='project-mdMobil-h3'>Proyectos</h3>
        <section className='project-container-mdMobil'>
            
            <div className="project-content-mdMobil">
                <ul>
                    {/* nuevos */}
                    <li><a href="https://mercadito-bice.vercel.app/">
                      
                        <img src={merca} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>MERCADITO</article>

                          <div className="content-language">
                            <span className="language-html">React JS</span>
                            
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="https://yony1990.github.io/CALORIA/">
                      
                        <img src={calor} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>CALORIA</article>

                          <div className="content-language">
                            <span className="language-html">React JS</span>
                            
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>

                    <li><a href="https://mobilejetskiservice.site/">
                      
                        <img src={jet} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>JETSKI</article>

                          <div className="content-language">
                            <span className="language-html">React JS</span>
                            
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>

                    <li><a href="https://yony1990.github.io/JUSTFEELRELAXED/">
                      
                        <img src={feel} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>JUSTFEEL</article>

                          <div className="content-language">
                            <span className="language-html">React JS</span>
                            
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    {/* viejos */}
                    <li><a href="https://yony1990.github.io/BIWEDEX/">

                        <img className='Biwedex-mobile' src={biwe} alt="img-biwedex" />
                        <div className="content-descr">
                          
                          <article>BIWEDEX</article>

                          <div className="content-language">
                            <span className="language-html">html</span>
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="https://yony1990.github.io/BLOG-S-YONY/">
                      
                        <img src={blog} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>MY BLOG</article>

                          <div className="content-language">
                            <span className="language-html">React JS</span>
                            
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="https://yony1990.github.io/music/">
                      
                        <img src={repro} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>MUSIC</article>

                          <div className="content-language">
                            <span className="language-html">React JS</span>
                            
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="https://yony1990.github.io/OHANA/">

                        <img src={ohana1} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>OHANA</article>

                          <div className="content-language">
                          <span className="language-html">React JS</span>
                            
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="https://yony1990.github.io/portafolio/">

                        <img src={porta} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>PORTFOLIO</article>

                          <div className="content-language">
                          
                            <span className="language-html">React JS</span>    
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="https://yony1990.github.io/Game/">

                        <img className='mini-game' src={game1} alt="img-game" />
                        <div className="content-descr">
                          
                          <article>GAME</article>

                          <div className="content-language">
                            <span className="language-html">html</span>
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    
                </ul>
            </div>
        </section>
    </>
    
  )
}

export default ProjectsMedidaMobil