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

function App() {
  return (
    //Administrar las rutas
    <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/administrar" element={<Administrador />}></Route>
          <Route exact path="*" element={<Error404 />}></Route>
          <Route exact path="/administrar/detalle/:idDetalle" element={<DetalleProducto/>}></Route>
          <Route exact path="/administrar/crear" element={<CrearProducto/>}></Route>
          <Route exact path="/administrar/editar/:id" element={<EditarProducto/>}></Route>
          <Route exact path="/administrar/crearCuenta" element={<CrearCuenta/>}></Route>
          <Route exact path="/administrar/iniciarSesion" element={<InicioSesion/>}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
