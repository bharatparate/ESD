import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.scss'



const Navigation = () => {
 const id = "01"
  return (
    <>
        <nav className='mainNav'>
            <ul>
                <li> <Link className="nav-link" to={`/detail/${id}`}>ERGOSUMDEUS</Link></li>
                <li> <Link className="nav-link" to={`/detail/${id}`}>CONVERGE</Link></li>
                <li> <Link className="nav-link" to={`/detail/${id}`}>COLLABORATE</Link></li>
                <li> <Link className="nav-link" to={`/detail/${id}`}>COGITATE</Link></li>
                <li> <Link className="nav-link" to={`/detail/${id}`}>COMMUNICATE</Link></li>
                <li> <Link className="nav-link" to="/">EXIT</Link></li>
            </ul>
        </nav>
    </>
  );
}

export default Navigation;