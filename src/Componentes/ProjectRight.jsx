import React, { useState } from 'react';
import htmlCert from './img/certificaciones/Certificado-HTML.webp';
import jsCert from './img/certificaciones/Certificado-javascript.webp';
import maquet from './img/certificaciones/Certificado-Maquetador.webp';

 
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
                <img className='figure-html' src={htmlCert} alt="img" />
            </div>

            <div onClick={handleImgCss} className={openCss ? "amplia-img" : "amplia-img active"}>
                <img className='figure-css' src={maquet} alt="img" />
            </div>

            <div onClick={handleImgJs} className={openJs ? "amplia-img" : "amplia-img active"}>
                <img className='figure-js' src={jsCert} alt="img" />
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
                            <li onClick={overNextUI} className={hoverScaleNextUI ? 'nextUi' : 'nextUi active'}></li>
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
                                {/* <figure onClick={handleImgHtml}></figure> */}
                                <img onClick={handleImgHtml} src={htmlCert} alt="img" />
                                <article><i className="bi bi-check2-all"></i> Certificación en Desarrollo Web HTML. </article>
                            </section>
                        </div>

                        <div className={infoCss ? 'info-skills-css' : 'info-skills-css active'}>
                            <span>CSS</span>
                            <section className='img-and-content'>
                                {/* <figure onClick={handleImgCss}></figure> */}
                                <img onClick={handleImgCss} src={maquet} alt="img" />
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
                                {/* <figure onClick={handleImgJs}></figure> */}
                                <img onClick={handleImgJs} src={jsCert} alt="img" />
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
                            <span>MONGO DB</span>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/qnZtnQGLDvY?si=POLKv-AYDRdRtfO3"><figure className='Ingenioteka'></figure></a>
                                
                                <article>

                                    <i className="bi bi-check2-all"></i> Curso dado por Ingenioteka.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Aprende MongoDB NOSQL desde cero.
                                    <br />
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/BylNTBm27ZU?si=ANDSZTI2a0pw5Iwu"><figure className='apasoft'></figure></a>
                                
                                <article>

                                    <i className="bi bi-check2-all"></i> Curso dado por Apasoft Training.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> Curso de MongoDB desde Cero.
                                    <br />
                                    
                                </article>

                            </section>

                            <section className='img-and-content'>

                                <a href="https://youtu.be/YyfdOX-Clf4?si=8G0YnCC72zEKzqA0"><figure className='tech'></figure></a>
                                
                                <article>

                                    <i className="bi bi-check2-all"></i> Curso dado por Tech Viajero.
                                    <br />
                                    <i className="bi bi-spellcheck"></i> MongoDB EN 1 HORA 2024 - Aprende desde Ceros.
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
                            <span>SWIPER</span>
                            <section className='img-and-content'>

                                <a href="https://swiperjs.com/"><figure className='swiper'></figure></a>
                                
                                <article>

                                    <i className="bi bi-check2-all"></i> Aprendido Leyendo Documentación.
                                    <br />
   
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