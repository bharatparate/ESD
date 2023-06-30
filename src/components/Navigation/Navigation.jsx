import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.scss'



const Navigation = () => {
 const id = "01"
  return (
    <>
        <nav className='mainNav'> 
            <ul>
                <li> <NavLink className="nav-link" to={`/`}>ERGOSUMDEUS</NavLink></li>
                <li> <NavLink className="nav-link" to={`/converge`}>CONVERGE</NavLink></li>
                <li> <NavLink className="nav-link" to={`/collaborate`}>COLLABORATE</NavLink></li>
                <li> <NavLink className="nav-link" to={`/`}>COGITATE</NavLink></li>
                <li> <NavLink className="nav-link" to={`/`}>COMMUNICATE</NavLink></li>
                <li> <NavLink className="nav-link" to="/">EXIT</NavLink></li>
            </ul>
        </nav>
    </>
  );
}

export default Navigation;