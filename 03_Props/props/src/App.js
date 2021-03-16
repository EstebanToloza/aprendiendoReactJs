import React from 'react';
import Comentario from './components/Comentario';
import Saludo from './components/Saludo'

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Juan' edad={30}/>
      <Saludo persona='Pedro' edad={20}/>
      <Saludo persona='Matías' edad={40}/>
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Juan'
        texto='rrrrrrrrrrrrrrrrrr'      
      />
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Pedro'
        texto='aaaaaaaaaaaaaaaaaaa'    
      />
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Matias'
        texto='eeeeeeeeeeeeeeeee'    
      />
    </div>
  );
}

export default App;
