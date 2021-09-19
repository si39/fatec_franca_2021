import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu3() {
    return (
    <div className="menu">
                <nav>
                    <ul>                             
                    <div className="d0"><li> <Link to="/"> MENU </Link> </li></div>
                    <div className="d0"><li> <Link to="/pacaembu"> VOLTAR </Link> </li></div>
                    <div className="d1"><li> <Link to="#"> 3.2.1-CORRETORES </Link> </li></div>
                    <div className="d2"><li> <Link to="/capri"> 3.2.2-FINANCIAMENTO </Link> </li></div>
                    <div className="d3"><li> <Link to="/modelo"> 3.2.3-PROJETOS MODELO </Link> </li></div>
                    <div className="d4"><li> <Link to="#"> 3.2.4-INVESTIMENTO </Link> </li></div>
                    </ul>
                </nav>

    </div>
    )
}

export default Menu3;