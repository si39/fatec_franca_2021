import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu2() {
    return (
    <div className="menu">
                <nav>
                    <ul>                             
                    <div className="d0"><li> <Link to="/"> VOLTAR </Link> </li></div>
                    <div className="d1"><li> <Link to="#"> 3.1-PARQUE UNIVERSITÁRIO </Link> </li></div>
                    <div className="d2"><li> <Link to="/capri"> 3.2-VILLA DI CAPRI </Link> </li></div>
                    <div className="d3"><li> <Link to="#"> 3.3-VITTA RESIDENCIAL </Link> </li></div>
                    <div className="d4"><li> <Link to="#"> 3.4-QUINTA D’ OESTE </Link> </li></div>
                    <div className="d5"><li> <Link to="#"> 3.5-VIVA REAL </Link> </li></div>
                    </ul>
                </nav>
    </div>
    )
}

export default Menu2;