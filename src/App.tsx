

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Navegacion } from './Componentes/Navegacion';
import {Provedores} from './Componentes/Provedores';
import { Articulos } from './Componentes/Articulos';
import { Ventas } from './Componentes/Ventas';

function App() {
  return (
    
    <Router>
      <Navegacion/>
      <div className="container mt-4">
        <Routes>
          <Route path="/proveedores" element={<Provedores/>} />
          <Route path="/articulos" element={<Articulos/>} />
          <Route path="/ventas" element={<Ventas/>} />
          
        </Routes>
      </div>
    </Router>


    
  
    
    
  );
}

export default App;