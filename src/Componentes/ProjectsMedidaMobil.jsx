import React from 'react'
import biwedexImg from './img/projectsImg/BIWEDEX-img.webp';
import game from './img/projectsImg/miniGame.webp';
import music from './img/projectsImg/music.webp';
import progress from './img/projectsImg/progress.png';
import yo from './img/cell/yo.webp';

const ProjectsMedidaMobil = () => {
  return (
    <>
    
        <h3 className='project-mdMobil-h3'>Proyectos</h3>
        <section className='project-container-mdMobil'>
            
            <div className="project-content-mdMobil">
                <ul>
                    <li><a href="https://yony1990.github.io/BIWEDEX/">

                        <img className='Biwedex-mobile' src={biwedexImg} alt="img-biwedex" />
                        <div className="content-descr">
                          
                          <article>BIWEDEX</article>

                          <div className="content-language">
                            <span className="language-html">html</span>
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="https://yony1990.github.io/music/">
                      
                        <img src={music} alt="img-yo" />
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
                    <li><a href="">

                        <img src={progress} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>Progress</article>

                          <div className="content-language">
                            {/* <span className="language-html">html</span>
                            <span className="language-css">css</span>
                            <span className="language-js">js</span> */}
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="#">

                        <img src={yo} alt="img-yo" />
                        <div className="content-descr">
                          
                          <article>PORTFOLIO</article>

                          <div className="content-language">
                            <span className="language-html">react js</span>
                            <span className="language-css">css</span>
                            <span className="language-js">js</span>
                            <span className="language-js">npm</span>
                            
                          </div>
                          
                        </div>
                        
                      
                    </a></li>
                    <li><a href="https://yony1990.github.io/Game/">

                        <img className='mini-game' src={game} alt="img-game" />
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