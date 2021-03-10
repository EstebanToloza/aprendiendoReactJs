import React from 'react';

import Parrafo from './components/Parrafo.jsx'
import Variables from './components/Variables.jsx';
import Eventos from './components/Eventos.jsx';
import Contador from './components/Contador.jsx';

//importando componente en react
function App() {
  return (
    <div className="App">
      <h1>Hola mundo React</h1>
      <Parrafo /> 
      <Variables />
      <Eventos />
      <Contador />
    </div>
  );
}

export default App;
