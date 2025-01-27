import React from 'react';
import snpinnerReact from './img/spinner/rrrr.webp';

function ReactIMG() {
    return (
        <section className='spinner-container'>
            <div className="spinner-box">
                <div className="blue-orbit leo">
                </div>
            
                <div className="green-orbit leo">
                </div>
                
                <div className="red-orbit leo">
                </div>
                
                {/* <div className="imgReactAnima"></div> */}
                <img className="imgReactAnima" src={snpinnerReact} alt="img-react" />
            </div>
        </section>
    );
}

export default ReactIMG;