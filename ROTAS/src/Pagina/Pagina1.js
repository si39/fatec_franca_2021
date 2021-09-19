import React from 'react';
import Texto from './Texto.js';
import Menu from '../Componentes/Menu1.js';
import './pagina.css'

function Pagina1() {
return (
    <div>
        <header>
           <Menu />
        </header>  
        <main className="menu1">
           <Texto texto="MENU PRINCIPAL" />
        </main>
    </div>) 
}

export default Pagina1;