import React, { useState } from 'react';

 
const ProjectRight = () => {
    
      const [openHtml, setOpenHtml] = useState(true);
      const [infoHtml, setInfoHtml] = useState(false);
      const [hoverScaleHtml, sethoverScaleHtml] = useState(false);
      
    
      const [openCss, setOpenCss] = useState(true);
      const [infoCss, setInfoCss] = useState(true);
      const [hoverScaleCss, sethoverScaleCss] = useState(true);
     
    
      const [openJs, setOpenJs] = useState(true);
      const [infoJs, setInfoJs] = useState(true);
      const [hoverScaleJs, sethoverScaleJs] = useState(true);
    
      const [infoReact, setInfoReact] = useState(true);
      const [hoverScaleReact, sethoverScaleReact] = useState(true);
    
      const [infoReactN, setInfoReactN] = useState(true);
      const [hoverScaleReactN, sethoverScaleReactN] = useState(true);
    
      const [infoVite, setInfoVite] = useState(true);
      const [hoverScaleVite, sethoverScaleVite] = useState(true);
    
      const [infoBost, setInfoBost] = useState(true);
      const [hoverScaleBost, sethoverScaleBost] = useState(true);
    
      const [infoTail, setInfoTail] = useState(true);
      const [hoverScaleTail, sethoverScaleTail] = useState(true);
      
      const [infoGitHub, setInfoGitHub] = useState(true);
      const [hoverScaleGitHub, sethoverScaleGitHub] = useState(true);
    
      const [infoNextUI, setInfoNextUI] = useState(true);
      const [hoverScaleNextUI, sethoverScaleNextUI] = useState(true);
    
      const [infoMaterial, setInfoMaterial] = useState(true);
      const [hoverScaleMaterial, sethoverScaleMaterial] = useState(true);
    
      const [infoMotion, setInfoMotion] = useState(true);
      const [hoverScaleMotion, sethoverScaleMotion] = useState(true);
          
      // HTML skill
    
      const overHtml = (e) => {
        setInfoHtml()
        sethoverScaleHtml()
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
      const handleImgHtml = (e) => {
        setOpenHtml(!openHtml)
      }
    
      // CSS skill
    
      const overCss = (e) => {
        // setActP(false)
        setInfoHtml(true)
        setInfoCss()
        sethoverScaleCss()
        sethoverScaleHtml(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
      const handleImgCss = (e) => {
        setOpenCss(!openCss)
      }
    
      // JS skill
    
      const overJs = (e) => {
        // setActP(false)
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs()
        sethoverScaleJs()
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
      const handleImgJs = (e) => {
        setOpenJs(!openJs)
      }
    
      // REACT skill
    
      const overRact = (e) => {
        // setActP(false)
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact()
        sethoverScaleReact()
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
      
      // REACT-Native skill
    
      const overRactN = (e) => {
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN()
        sethoverScaleReactN()
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
    
      // Vite skill
    
      const overVite = (e) => {
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite()
        sethoverScaleVite()
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
      
      // Bost skill
    
      const overBost = (e) => {
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost()
        sethoverScaleBost()
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
      
      // Bost skill
    
      const overTail = (e) => {
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail()
        sethoverScaleTail()
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
      
       // GitHub skill
    
       const overGitHub = (e) => {
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub()
        sethoverScaleGitHub()
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
    
      // NextUI skill
    
      const overNextUI = (e) => {
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI()
        sethoverScaleNextUI()
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
    
      // Material skill
    
      const overMaterial = (e) => {
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial()
        sethoverScaleMaterial()
        setInfoMotion(true)
        sethoverScaleMotion(true)
      }
    
      // Motion skill
    
      const overMotion = (e) => {
        setInfoHtml(true)
        sethoverScaleHtml(true)
        setInfoCss(true)
        sethoverScaleCss(true)
        setInfoJs(true)
        sethoverScaleJs(true)
        setInfoReact(true)
        sethoverScaleReact(true)
        setInfoReactN(true)
        sethoverScaleReactN(true)
        setInfoVite(true)
        sethoverScaleVite(true)
        setInfoBost(true)
        sethoverScaleBost(true)
        setInfoTail(true)
        sethoverScaleTail(true)
        setInfoGitHub(true)
        sethoverScaleGitHub(true)
        setInfoNextUI(true)
        sethoverScaleNextUI(true)
        setInfoMaterial(true)
        sethoverScaleMaterial(true)
        setInfoMotion()
        sethoverScaleMotion()
      }
    
    return (
        <div className='projectRight'>
            {/* PROYECTO DERECHA */}

            <div onClick={handleImgHtml} className={openHtml ? "amplia-img" : "amplia-img active"}>
                <figure className='figure-html'></figure>
            </div>

            <div onClick={handleImgCss} className={openCss ? "amplia-img" : "amplia-img active"}>
                <figure className='figure-css'></figure>
            </div>

            <div onClick={handleImgJs} className={openJs ? "amplia-img" : "amplia-img active"}>
                <figure className='figure-js'></figure>
            </div>


            <section className='projects-R'>

                <section className='projects-R-col-1'>
                    <h3>Presentación de Proyectos</h3>
                    <article>
                    Mis proyectos abarcan desde la creación de sitios responsivos que se adapten a diferentes dispositivos hasta el diseño de aplicaciones móviles que ofrezcan una experiencia intuitiva al usuario. La planificación y ejecución de estos proyectos requieren un enfoque metódico que incluya la investigación de mercado, el diseño UI/UX. Además, la implementación de tecnologías innovadoras, como inteligencia artificial, puede transformar la manera en que los usuarios interactúan con las plataformas digitales.
                    </article>
                </section>
                
                <section className='projects-R-col-2'>
                    <h3 className='project-skills'>Skills Usadas</h3>

                    <div className="skils-usadas">
                        <ul>
                            <li onClick={overHtml}  className={hoverScaleHtml ? 'html' : 'html active'}></li>
                            <li onClick={overCss} className={hoverScaleCss ? 'css' : 'css active'}></li>
                            <li onClick={overJs} className={hoverScaleJs ? 'js' : 'js active'}></li>
                            <li onClick={overRact} className={hoverScaleReact ? 'react' : 'react active'}></li>
                            <li onClick={overRactN} className={hoverScaleReactN ? 'reactN' : 'reactN active'}></li>
                            <li onClick={overVite} className={hoverScaleVite ? 'vite' : 'vite active'}></li>
                            <li onClick={overBost} className={hoverScaleBost ? 'bootstrap' : 'bootstrap active'}></li>
                            <li onClick={overTail} className={hoverScaleTail ? 'tailwind' : 'tailwind active'}></li>
                            <li onClick={overGitHub} className={hoverScaleGitHub ? 'github' : 'github active'}></li>
                            <li onClick={overNextUI} className={hoverScaleNextUI ? 'nextUi' : 'nextUi active'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                    <path  d="M6.353 0h11.294A6.353 6.353 0 0 1 24 6.353v11.294A6.353 6.353 0 0 1 17.647 24H6.353A6.353 6.353 0 0 1 0 17.647V6.353A6.353 6.353 0 0 1 6.353 0Zm7.755 6.913h-.933v6.702a2.88 2.88 0 0 1-.362 1.45c-.24.424-.596.77-1.025 1c-.443.244-.96.365-1.553.365c-.592 0-1.108-.121-1.55-.364a2.603 2.603 0 0 1-1.024-1a2.865 2.865 0 0 1-.365-1.45V6.912h-.933v6.767a3.558 3.558 0 0 0 .489 1.862c.327.547.798.994 1.362 1.292c.582.316 1.256.474 2.021.474c.769 0 1.444-.157 2.024-.471a3.473 3.473 0 0 0 1.36-1.293c.33-.565.5-1.21.49-1.864V6.913Zm3.648 10.22V6.914h-.933v10.22h.933Z"/>
                                </svg>
                            </li>
                            <li onClick={overMaterial} className={hoverScaleMaterial ? 'material' : 'material active'}></li>
                            <li onClick={overMotion} className={hoverScaleMotion ? 'motion' : 'motion active'}></li>
                
                        </ul>
                    </div>
                </section>
                
                <div className="info-content-skills">
                
                    <div className="info-skills">

                        <div className={infoHtml ? 'info-skills-html' : 'info-skills-html active'}>
                            <span>HTML</span>
                            <section className='img-and-content'>
                                <figure onClick={handleImgHtml}></figure>
                                <article><i className="bi bi-check2-all"></i> Certificación en Desarrollo Web HTML. </article>
                            </section>
                        </div>

                        <div className={infoCss ? 'info-skills-css' : 'info-skills-css active'}>
                            <span>CSS</span>
                            <section className='img-and-content'>
                                <figure onClick={handleImgCss}></figure>
                                <article><i className="bi bi-check2-all"></i> Certificación en Maquetador Web Avanzado. </article>
                            </section>
                            
                            <section className='img-and-content'>
                                <a href="https://youtu.be/ELSm-G201Ls?si=qi5gLIOCbm-Gl9Aj"><figure className='dalto'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Soy Dalto.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Curso de HTML y CSS desde CERO.
                                </article>
                            </section>       
                        </div>

                        <div className={infoJs ? 'info-skills-js' : 'info-skills-js active'}>
                            <span>JavaScript</span>
                            <section className='img-and-content'>
                                <figure onClick={handleImgJs}></figure>
                                <article><i className="bi bi-check2-all"></i> Certificación en JavaScript desde cero. </article>
                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/z95mZVUcJ-E?si=Wcy-Likucf0Z4GOc"><figure className='dalto'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Soy Dalto.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> JAVASCRIPT desde CERO.
                                    <br />
                                    Nivel Junior & Nivel Medium
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/FlEDEdNShwQ?si=NnGXH4P4hiER56UR"><figure className='fernando'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Fernando Herrera.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> JavaScript Moderno.
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/-H4W_PkFbls?si=9-3P-UwbE8TqvLAm"><figure className='carpi'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Carpi Coder.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> JavaScript.
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/m2o-eeqwgkQ?si=Hfpz55xOzy2mi6x7"><figure className='aprogramar'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Aprogramar.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Aprogramar en JavaScript.
                                    
                                </article>

                            </section>

                        </div>

                        <div className={infoReact ? 'info-skills-react' : 'info-skills-react active'}>
                            <span>React JS</span>
                            <section className='img-and-content'>

                                <a href="https://youtu.be/6MV3u4kMeHc?si=ESlfuBGFszGYKHoS"><figure className='fernando'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Fernando Herrera.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> React: de Cero a Experto.
                                    <br />
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/2SwKpVVNfIE?si=4Yq3qcf9YLGT6FuC"><figure className='carpi'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Carpi Coder.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> React JS.
                                    <br />
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/IIbYX19L4dI?si=qmDBJoL5XmECNoKc"><figure className='angel'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Angel Bits.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> React + Vite Curso.
                                    <br />
                                    
                                </article>

                            </section>

                        </div>

                        <div className={infoReactN ? 'info-skills-reactN' : 'info-skills-reactN active'}>
                            <span>React Native</span>
                            <section className='img-and-content'>

                            <a href="https://youtu.be/U23lNFm_J70?si=gEl03U3ggqZEYdEd"><figure className='midu'></figure></a>
                            
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Midulive.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Curso REACT NATIVE Aplicación DESDE CERO con Expo.
                                    <br />
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/IOBnr9d7A3c?si=6WIpygdZUtEZ3wZ5"><figure className='codeWi'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Code With.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> React Native Expo.
                                    <br />
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/hXDMWeD0ERM?si=lUC1V02gZ945aMyr"><figure className='fazt'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Fazt Bits.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> React Native, Curso para Principiantes (usando Expo).
                                    <br />
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/aLtS2wVjDSc?si=fW-Q9jqeuqXzRxYN"><figure className='dani'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por DaniDev.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> React Native, Proyecto (usando Expo).
                                    <br />
                                    
                                </article>

                            </section>

                        </div>

                        <div className={infoVite ? 'info-skills-Vite' : 'info-skills-Vite active'}>
                            <span>Vite</span>
                            <section className='img-and-content'>

                                <a href="https://youtu.be/IIbYX19L4dI?si=qmDBJoL5XmECNoKc"><figure className='angel'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Angel Bits.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> React + Vite Curso.
                                    <br />
                                    
                                </article>
                            
                            </section>

                        </div>

                        <div className={infoBost? 'info-skills-Bost' : 'info-skills-Bost active'}>
                            <span>Bootstrap 5</span>
                            <section className='img-and-content'>

                                <a href="https://youtu.be/QCw0L6FupQ0?si=fnmx5rFTlDtmMJau"><figure className='bost'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por freeCodeCamp.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Aprende Bootstrap 5 - Curso de Bootstrap desde Cero.
                                    <br />
                                    
                                </article>

                            </section>

                        </div>

                        <div className={infoTail? 'info-skills-Tail' : 'info-skills-Tail active'}>
                            <span>Tailwind CSS</span>
                                <section className='img-and-content'>

                                <a href="https://youtu.be/gvdvuGSksDU?si=cN5v7iHuBLjQJ65e"><figure className='tail'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por Coding Tube.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Curso Tailwind CSS desde Cero.
                                    <br />
                                    
                                </article>

                            </section>

                        </div>

                        <div className={infoGitHub? 'info-skills-GitHub' : 'info-skills-GitHub active'}>
                            <span>GIT y GITHUB</span>
                            <section className='img-and-content'>

                                <a href="https://youtu.be/3GymExBkKjE?si=C_L-dw1GENfHO-Ei"><figure className='Moure'></figure></a>
                                
                                <article>
                                    <i className="bi bi-check2-all"></i> Curso dado por MoureDev.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Curso de GIT y GITHUB desde CERO.
                                    <br />
                                    
                                </article>

                            </section>

                        </div>

                        <div className={infoNextUI? 'info-skills-NextUI' : 'info-skills-NextUI active'}>
                            <span>NEXT UI</span>
                            <section className='img-and-content'>

                                <a href="https://youtu.be/JQUytmO-iA0?si=7-GVO3jMJfVIPMRx"><figure className='midu'></figure></a>
                                
                                <article>

                                    <i className="bi bi-check2-all"></i> Curso dado por Midulive.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Esta biblioteca de UI está en OTRO NIVEL (React JS).
                                    <br />
                                    
                                </article>

                            </section>

                        </div>

                        <div className={infoMaterial? 'info-skills-Material' : 'info-skills-Material active'}>
                            <span>MATERIAL UI</span>
                            <section className='img-and-content'>

                                <a href="http://bit.ly/3YtWQGm"><figure className='bluuweb'></figure></a>
                                
                                <article>

                                    <i className="bi bi-check2-all"></i> Curso dado por Bluuweb.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Curso Material UI.
                                    <br />
                                    
                                </article>

                            </section>

                        </div>

                        <div className={infoMotion? 'info-skills-Motion' : 'info-skills-Motion active'}>
                            <span>MOTION.dev</span>
                            <section className='img-and-content'>

                                <a href="https://motion.dev"><figure className='motion'></figure></a>
                                
                                <article>

                                    <i className="bi bi-check2-all"></i> Aprendido Leyendo Documentación.
                                    <br />
                                    {/* <i className="bi bi-spellcheck"></i> Curso Material UI.
                                    <br /> */}
                                    
                                </article>

                            </section>

                        </div>

                    </div>
                    

                    

                </div>
                



            </section>
        </div>
    );
}

export default ProjectRight;