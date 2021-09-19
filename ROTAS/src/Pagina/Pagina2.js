import React from 'react';
import Texto from './Texto.js';
import Menu from '../Componentes/Menu2.js';

function Menu1() {
return (
    <div>
        <header>
           <Menu />
        </header>  
        <main className="menu2">
           <Texto texto="3. PACAEMBÚ " />
        </main>
    </div>) 
}

export default Menu1;