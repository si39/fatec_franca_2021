import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu1() {
    return (
    <div className="menu">
                <nav>
                    <ul>                             
                    <div className="d1"><li> <Link to="#"> 1-PARRA </Link> </li></div>
                    <div className="d2"><li> <Link to="#"> 2-PROJETO </Link> </li></div>
                    <div className="d3"><li> <Link to="/pacaembu"> 3-PACAEMBU </Link> </li></div>
                    <div className="d4"><li> <Link to="#"> 4-PERPLAN </Link> </li></div>
                    <div className="d5"><li> <Link to="#"> 5-MRV </Link> </li></div>
                    </ul>
                </nav>
    </div>
    )
}

export default Menu1;