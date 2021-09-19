import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu4() {
    return (
    <div className="menu">
                <nav>
                    <ul>                             
                    <div className="d0"><li> <Link to="/"> MENU </Link> </li></div>
                    <div className="d0"><li> <Link to="/capri"> VOLTAR </Link> </li></div>
                    <div className="d1"><li> <Link to="#"> 3.2.3.1-CASAS </Link> </li></div>
                    <div className="d2"><li> <Link to="#"> 3.2.3.2-APARTAMENTOS </Link> </li></div>
                    <div className="d3"><li> <Link to="#"> 3.2.3.3-LAZER </Link> </li></div>
                    <div className="d4"><li> <Link to="#"> 3.2.3.4-EDICULAS </Link> </li></div>
                    <div className="d5"><li> <Link to="#"> 3.2.3.5-SOBRADOS </Link> </li></div>
                    </ul>
                </nav>
    </div>
    )
}

export default Menu4;