import React from 'react';
import Texto from './Texto.js';
import Menu from '../Componentes/Menu4.js';

function Menu1() {
return (
    <div>
        <header>
           <Menu />
        </header>  
        <main className="menu4">
           <Texto texto="3.2.3 - PROJETOS MODELO" />
        </main>
    </div>) 
}

export default Menu1;