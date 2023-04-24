// Stylesheets 

import './App.css'

// Componente Testimonio
import Testimonio from './componentes/Testimonio.jsx'

// Imagenes
import img from './images/testimonio-emma.png'
import img2 from './images/testimonio-shawn.png'
import img3 from './images/testimonio-sarah.png'

function App() {

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre el curso:</h1>
        <Testimonio 
        nombre='Shawn Wang'
        pais='Singapur'
        imagen={img2}
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Esto es lo que dicen nuestros alumnos sobre el curso Esto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el curso'
        />
        <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen={img}
        cargo='Ingenigera de Software'
        empresa='Spotify'
        testimonio='Esto es lo que dicen nuestros alumnos sobre el curso Esto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el curso'
        />
        <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen={img3}
        cargo='Ingeniera de Software'
        empresa='Chat Desk'
        testimonio='Esto es lo que dicen nuestros alumnos sobre el curso Esto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el cursoEsto es lo que dicen nuestros alumnos sobre el curso'
        />
      </div>
    </div>
  )
}

export default App; 
