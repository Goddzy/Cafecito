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

function App() {
  return (
    //Administrar las rutas
    <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/administrar" element={<Administrador />}></Route>
          <Route path="*" element={<Error404 />}></Route>
          <Route path="/administrar/detalle" element={<DetalleProducto/>}></Route>
          <Route path="/administrar/crear" element={<CrearProducto/>}></Route>
          <Route path="/administrar/editar/:id" element={<EditarProducto/>}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
