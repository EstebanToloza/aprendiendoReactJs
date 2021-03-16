import React from 'react';
import Saludo from './components/Saludo'

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Juan' edad={30}/>
      <Saludo persona='Pedro' edad={20}/>
      <Saludo persona='Matías' edad={40}/>
    </div>
  );
}

export default App;
