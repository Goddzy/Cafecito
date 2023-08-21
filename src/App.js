import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio"
import Administrador from "./components/views/Administrador"
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer"

function App() {
  return (
    //Administrar las rutas
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio/>}></Route>
        <Route exact path="/administrar" element={<Administrador/>}></Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
