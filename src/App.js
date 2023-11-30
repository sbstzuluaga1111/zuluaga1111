import './App.css';
import React, { useState } from 'react';
import SobreMi from './components/SobreMi';
import Conocimientos from './components/Conocimientos';
import Proyectos from './components/Proyectos';
import MiNavbar from './components/nav';

function App() {
  const [componenteActivo, setComponenteActivo] = useState('SobreMi');

  const handleButtonClick = (nombreComponente) => {
    setComponenteActivo(nombreComponente);
  };

  return (
    <div className="App">
      <MiNavbar onButtonClick={handleButtonClick} />
      <header className="App-header">
        {componenteActivo === 'SobreMi' && <SobreMi />}
        {componenteActivo === 'Conocimientos' && <Conocimientos />}
        {componenteActivo === 'Proyectos' && <Proyectos />}
      </header>
    </div>
  );
}

export default App;
