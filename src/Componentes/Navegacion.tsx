import React from 'react'

import { Link } from 'react-router-dom';

export const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/proveedores">Proveedores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/articulos">Articulos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ventas">Ventas</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}