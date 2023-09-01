import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css"
import DetalleProducto from "./components/views/producto/DetalleProducto"
import CrearProducto from "./components/views/producto/CrearProducto"
import EditarProducto from "./components/views/producto/EditarProducto"
import InicioSesion from "./components/views/cuenta/InicioSesion";
import CrearCuenta from "./components/views/cuenta/CrearCuenta";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas"
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(localStorage.getItem('usuarioCreadoKey')) || {};
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return (
    //Administrar las rutas
    <BrowserRouter>
      <Menu usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/administrar/detalle/:idDetalle" element={<DetalleProducto/>}></Route>  
          <Route exact path="/administrar/iniciarSesion" element={<InicioSesion setUsuarioLogeado={setUsuarioLogeado}/>}></Route>
          <Route path="/administrar/*" element={
          <RutasProtegidas>
            <RutasAdmin setUsuarioLogeado={setUsuarioLogeado}></RutasAdmin>
          </RutasProtegidas>
        }>
           
          </Route>

          <Route exact path="*" element={<Error404 />}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
