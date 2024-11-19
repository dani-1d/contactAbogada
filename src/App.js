
import React from "react";
import {Route, Routes } from "react-router-dom";
import {InicioP} from './pages/Inicio/Inicio.jsx';
import {AboutP} from './pages/About/About.jsx';
import {ServiciosP} from './pages/Servicios/Servicios';
import {ContactameP} from './pages/Contactame/Contactame.jsx'
import './App.css';


window.addEventListener('DOMContentLoaded',App)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InicioP />}></Route>
        <Route path='/About' element={<AboutP/>}></Route>
        <Route path='/Servicios' element={<ServiciosP />}></Route>
        <Route path='/Contactame' element={<ContactameP/>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
