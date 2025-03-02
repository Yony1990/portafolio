
import './App.css'
import EfectoPC from './Componentes/EfectoPC'

import Fondo from './Componentes/Fondo'
import Header from './Componentes/Header'
import MenuLateral from './Componentes/MenuLateral'
import OpacaFondo from './Componentes/OpacaFondo'
import Principal from './Componentes/Principal'
import Projects from './Componentes/Projects'
import ReactIMG from './Componentes/ReactIMG'





function App() {
  
  return (
    <main className='app'>

      <EfectoPC/>
      <Header/>
      <MenuLateral/>

      <div className="app-content">


        <OpacaFondo/>

        <div className="content-1">
          <Fondo/>
        </div>
        
        <div className="content-2">

            <Principal />
            <ReactIMG />
            <Projects />
              
        </div>
        
      </div>
      
    </main>
  )
}

export default App
