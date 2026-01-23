import  { useEffect, useState } from 'react'
import { about } from '../helps/about'
import { studen } from '../helps/studen'
import { valueWidget } from '../helps/valueWidget';
import DigitalClock from './DigitalClock';
import Icons from './Icons';
import cv from './img/cv/cvYony.png'
import fondo_cell from './img/cell/fondo-cell-1_11zon.webp'
import abaut from './img/cell/yo.webp'
import indeed from './img/cell/indeed-2-co.webp'
import BlurText from './BlurText';


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

    // const handleAnimationComplete = () => {
      
    // };
    
    
  return (
    <section id='principal'>

            
            <div onClick={handleCV} className={cvAmpli ? "amplia-img-cv active" : "amplia-img-cv"}><img src={cv} alt="cv-img" /></div>

            <div className="home-container">
              
                <div className="home-content">

                    <div className="animaIni">

                            <span>Hola, soy</span>
                      
                      
                      <h1> Yonimiler Cárdenas </h1>
                      

                      <div className="text">
                          <h2><br />
                            Programador Frontend en React JS
                          </h2>
                      </div>
                    </div>
            
                    <div className="parrafoPri">
                        
                            <BlurText
                                text="Integra diseño y lógica de negocio como una arquitectura, convirtiendo ideas en soluciones digitales alineadas con objetivos reales. La actualización constante en herramientas y buenas prácticas sustenta cada proyecto con criterio técnico, solidez y una visión integral, garantizando resultados eficientes, escalables y sostenibles."
                                delay={100}
                                animateBy="words"
                                direction="top"
                                // onAnimationComplete={handleAnimationComplete}
                                className="text-2xl mb-8"
                            />
                        
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

                            <article>

                            &nbsp; &nbsp;Desarrollador web especializado en frontend, con un enfoque sólido en ReactJS y en la creación de interfaces modernas, eficientes y orientadas a la experiencia del usuario. Cuenta con experiencia práctica en el desarrollo de aplicaciones interactivas, aplicando buenas prácticas de arquitectura, rendimiento y mantenibilidad.
                            <br /><br />

                            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Posee un dominio consistente de tecnologías fundamentales como HTML, CSS y JavaScript, lo que le permite construir soluciones robustas y bien estructuradas. Su conocimiento en frameworks de diseño como Tailwind CSS y Bootstrap le permite optimizar tanto la estética como el rendimiento de las aplicaciones, garantizando una experiencia de usuario coherente y atractiva.<br /><br />

                            &nbsp;&nbsp; &nbsp; &nbsp;Está comprometido con la mejora continua, el aprendizaje constante de nuevas tecnologías y la adopción de estándares modernos de desarrollo. Su objetivo es aportar valor en proyectos innovadores y colaborar eficazmente dentro de equipos dinámicos, contribuyendo al éxito del producto y al crecimiento profesional colectivo.

                            </article>

                        </div>

                        <div className="container-studen">

                            <div className="back-container">

                                <div onClick={handleStuden} className="back">
                                    <i className="bi bi-arrow-left-short"></i>
                                    Back
                                </div>

                            </div>

                            <div className="container-carrera">
                            
                 

                                <span>
                                <span className='anio'>
                                2023</span> <br /> <br /> 
                                &nbsp; &nbsp; &nbsp;En 2023 inició su formación en programación en Educación IT, orientando su carrera al desarrollo frontend. Durante este período adquirió una base sólida en los principios del desarrollo web moderno, combinando teoría y práctica para construir aplicaciones funcionales, escalables y alineadas con los estándares actuales de la industria.<br /><br /> 

                                &nbsp; &nbsp;&nbsp;A lo largo de su proceso formativo, complementó su educación mediante una selección exigente de bootcamps y cursos en línea de alta calidad, lo que le permitió profundizar en tecnologías clave del ecosistema frontend. Esta formación continua le proporcionó herramientas para aplicar buenas prácticas de desarrollo, estructuración de proyectos, control de versiones y optimización del rendimiento, fortaleciendo su criterio técnico y su capacidad de resolución de problemas.<br /><br />  

                                &nbsp; &nbsp; &nbsp;Además, incorporó conocimientos en desarrollo backend y gestión de bases de datos, trabajando con SQL y MongoDB. Esta experiencia le permitió comprender la comunicación entre frontend y backend, el manejo de datos, la lógica del servidor y la integración de APIs, aportándole una visión full stack que potencia la calidad y coherencia de las soluciones que desarrolla.
                                </span>
                            
                            </div>
                        </div>
         
                    </div>

                </div>
            </div>
            
           
        </section>
  )
}

export default Principal
