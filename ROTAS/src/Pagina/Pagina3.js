import React from 'react';
import Texto from './Texto.js';
import Menu from '../Componentes/Menu3.js';

function Menu1() {
return (
    <div>
        <header>
           <Menu />
        </header>  
        <main className="menu3">
           <Texto texto="3.2 - VILA DI CAPRI" />
        </main>
    </div>) 
}

export default Menu1;