//Navbar   router-dom

import './App.css';
import { BrowserRouter, Link, Route,Routes } from 'react-router-dom'

import {Inicio} from "./components/home";
import {Admins} from "./components/admins";
import {Developers} from "./components/Developers";
import {FuncPublica} from "./components/FuncPublica";
import {ReporteEconomico} from "./components/reporteEconomico";

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <text class="navbar-brand text-white">Cerberus Corp</text>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <Link class="nav-link active text-white" aria-current="page" to="/">Inicio</Link>
              </li>

              <li class="nav-item dropdown">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Us
                  </button>
                  <ul class="dropdown-menu bg-dark">
                    <li><Link class="dropdown-item text-white" to="/Admins">Admins</Link></li>
                    <li><Link class="dropdown-item text-white" to="/Developers">Developers</Link></li>
                  </ul>
                </div>
              </li>


              <li class="nav-item">
              <Link class="nav-link active text-white" aria-current="page" to="/FuncPublica">FuncPublica</Link>
              </li>

              <li class="nav-item">
              <Link class="nav-link active text-white" aria-current="page" to="/reporteEconomico">reporteEconomico</Link>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>



      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/Admins' element={<Admins></Admins>}></Route>
        <Route path='/Developers' element={<Developers></Developers>}></Route>
        <Route path='/FuncPublica' element={<FuncPublica></FuncPublica>}></Route>
        <Route path='/reporteEconomico' element={<ReporteEconomico></ReporteEconomico>}></Route>
      </Routes>

    </BrowserRouter>
  );
}


export default App;
