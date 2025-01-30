import  { useEffect, useState } from 'react'
import { about } from '../helps/about'
import { studen } from '../helps/studen'
import { valueWidget } from '../helps/valueWidget';
import DigitalClock from './DigitalClock';
import Icons from './Icons';
import cv from './img/cv/CV2.webp'
import fondo_cell from './img/cell/fondo-cell-1.webp'
import abaut from './img/cell/yo.webp'
import indeed from './img/cell/indeed-2.webp'


const handleAbout = () => {
    about()
}

const handleStuden = () => {
    studen()
}

const handleInput = () => {
    valueWidget()
}

const Principal = () => {

    const [search, setSearch] = useState('Montevideo');
    const [value, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const [cvAmpli, setCvAmpli] = useState(false);

    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ search }&units=metric&lang=es&appid=74351d4cb5e227f666e0acdcb8677d69`;

    const getData = async () => {
        await fetch(URL)
        .then(resp => {return resp.json()})
        .then( data => {
            if(data.cod >= 400) {
            setValue(false)
            }else {
            setIcon(data.weather[0].main)
            setValue(data)
            }
            
        })
        .catch ( error => {
            console.log(error)
        })
    }

    const handleSearch = (e) => {
        
        if (e.key === 'Enter') {
            setSearch(e.target.value);
            valueWidget()
        
        }
    }

    useEffect(() => {
        getData()
    }, [search])

    const handleCV = () => {
        setCvAmpli(!cvAmpli)
    }
    
    
  return (
    <section id='principal'>

            {/* <div onClick={handleCV} className={cvAmpli ? "amplia-img-cv active" : "amplia-img-cv"}><figure></figure></div> */}
            <div onClick={handleCV} className={cvAmpli ? "amplia-img-cv active" : "amplia-img-cv"}><img src={cv} alt="cv-img" /></div>

            <div className="home-container">
              
                <div className="home-content">

                    <div className="animaIni">

                      <span>Hola, mi nombre es <br /></span>
                      <h1> Yonimiler Cárdenas</h1>
                      

                      <div className="text">
                          <h2><br />
                            Soy Programador Frontend jr. en React JS
                          </h2>
                      </div>
                    </div>
            
                    <div className="parrafoPri">
                      <p>Me encanta explorar diferentes lenguajes de programación. Cada día, busco nuevas herramientas y tecnologías que me ayuden a aprender y mejorar. Este campo es tan dinámico y creativo que siempre hay algo nuevo por descubrir. Siento que cada oportunidad me acerca más a mis metas. ¡La aventura nunca termina!</p>
                    </div>
                    <div className="btns">
                        <a href="https://wa.me/59891771888">
                            <button className="Btn btn-Li">
                    
                                <div className="sign"><i className="bi bi-person-raised-hand"></i></div>
                                
                                <div className="textBtn text-linke">Hablemos</div>
                                
                            </button>
                        </a>
                        
                    </div>

                </div>
                

            </div>

            <div className="content-cell">
                <div className="cell">
                

                    <div className="header-cell">
                        <div className="barra-superior">
                            <span className='hora'><DigitalClock/><i className="bi bi-github"></i></span>
                            <div className="circulo"></div>
                            <span className='porciento'>
                                <i className="bi bi-reception-4"></i>
                                <div>100%</div>
                                <i className="bi bi-battery-full"></i>
                            </span>
                        </div>
                        
                    </div>

                    <div  className="main-cell">

                        <div className="fondo-cell">
                            <img className='fondo_imgs' src={fondo_cell} alt="fondo" />
                            <div className="opacar-fondo-cell"></div>
                            
                            <div className="container-icons-main">

                                <div onClick={handleAbout} className="container-icon-about">
                                    
                                    <img className="icon-about" src={abaut} alt="mi-foto" />
                                    <span>About Me</span>
                                </div>

                                <div onClick={handleStuden} className="container-icon-studios">
                                    <div className="icon-studios"><i className="bi bi-mortarboard-fill"></i></div>
                                    <span>Studies</span>
                                </div>

                                <div onClick={handleCV} className="container-icon-cv">
                                    
                                    <div className="icon-cv">CV</div>
                                    <span>Curriculum</span>
                                </div>
                                
                            </div>

                            <div className='container-valu'>
    
                                <div className="row">
                                    <input 
                                        type="text"
                                        onKeyDown={handleSearch} 
                                        autoFocus
                                        placeholder='Search City'
                                    />
                                </div>
                                <div className="linea-Input"></div>
                            </div>

                            <div onClick={ handleInput } className="widgget">

                                

                                <div className="card-widgget">
                                    {(value) ? (
                                        <div className="card-widgget-container">

                                            <div className="container-img-temp">
                                                <img className='icon-widgget' src={ Icons(icon) } alt="icon-weather" />
                                                <p className="temp">{ (value.main.temp - 2).toFixed(0) }°</p>
                                            </div>

                                            <div className="localidad">
                                                <i className="bi bi-geo-alt-fill"></i>
                                                <span className='city-name'>{ value.name }</span>
                                            </div>
                                            
                                            
                                            <div className="card-widgget-footer">
                                                <p className='temp-max-min'>min { (value.main.temp_min - 2).toFixed(0) }° | max { (value.main.temp_max - 2).toFixed(0) }° </p>
                                            </div>
                                        </div>

                                    ) : (

                                        <h1>{ 'CITY NOT FOUND' }</h1>

                                    )}

                                </div>

                            </div>

                            <div className="container-contact">

                                <a href="https://www.linkedin.com/in/yonimiler-c%C3%A1rdenas-mach%C3%ADn-836a11261/"><span>linkeding</span><i className="bi bi-linkedin"></i></a>
                                
                                <a href="https://github.com/Yony1990"><span>github</span><i className="bi bi-github"></i></a>

                                <a href="https://profile.indeed.com/p/yonimilerc-lpkrmk2">
                                <img  className="indeed" src={indeed} alt="logo" />
                                </a>
                                
                                <a href="https://wa.me/59891771888"><span>whatsapp</span><i className="bi bi-whatsapp"></i></a>
                                
                            </div>
                        </div>

                        <div className="container-about">

                            <div className="back-container">
                                <div onClick={handleAbout} className="back">
                                    <i className="bi bi-arrow-left-short"></i>
                                    Back
                                </div>
                            </div>
                            

                            {/* <figure className="photo-abaut"></figure> */}
                            <img className="photo-abaut" src={abaut} alt="foto" />

                            <h2>About me</h2>

                            <article>&nbsp; &nbsp;Soy un desarrollador junior especializado en el frontend, con una sólida orientación hacia ReactjJS. Durante los últimos dos años, he adquirido experiencia significativa en este potente marco, lo que me ha permitido construir aplicaciones interactivas y eficientes. Además, tengo más de dos años de experiencia en lenguajes fundamentales como HTML, CSS y JavaScript, lo que me proporciona una base robusta para el desarrollo web.
                            <br /><br />
                            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Mi conocimiento en frameworks de diseño como Tailwind y Bootstrap me permite optimizar el rendimiento y la estética de las aplicaciones que desarrollo, asegurando una experiencia de usuario coherente y atractiva. Estoy comprometido con las mejores prácticas de desarrollo y constantemente busco actualizarme en nuevas tecnologías y tendencias del sector. Mi objetivo es contribuir al éxito de proyectos innovadores y colaborar eficazmente dentro de un equipo dinámico, donde pueda seguir aprendiendo y creciendo profesionalmente.</article>

                        </div>

                        <div className="container-studen">

                            <div className="back-container">

                                <div onClick={handleStuden} className="back">
                                    <i className="bi bi-arrow-left-short"></i>
                                    Back
                                </div>

                            </div>

                            <div className="container-carrera">
                            
                                <span><span className='anio'>2009</span> <br /> &nbsp; &nbsp; &nbsp;Graduado de Músico Profecional en los Instumentos Violín y Viola. Conservatorio de Música Jose White - Cuba.</span><br /><br />

                                <span><span className='anio'>2023</span> <br /> &nbsp; &nbsp; &nbsp;En 2023, inicié mis estudios en programación, especializándome en desarrollo frontend. &nbsp;A lo largo de mi carrera, he adquirido habilidades fundamentales a través de una búsqueda exigente entre bootcamps y cursos en línea de alta calidad. Esta experiencia me ha permitido desarrollar técnicas y estrategias que son esenciales en el entorno profesional actual.</span>
                            
                            </div>
                        </div>
         
                    </div>

                </div>
            </div>
            
           
        </section>
  )
}

export default Principal
