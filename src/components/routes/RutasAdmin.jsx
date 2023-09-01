import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Administrador from '../views/Administrador';
import CrearProducto from '../views/producto/CrearProducto';
import EditarProducto from '../views/producto/EditarProducto';
import CrearCuenta from '../views/cuenta/CrearCuenta';

const RutasAdmin = ({setUsuarioLogeado}) => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />}></Route>
        <Route exact path="/crear" element={<CrearProducto/>}></Route>
        <Route exact path="/editar/:_id" element={<EditarProducto/>}></Route>
        <Route exact path="/crearCuenta" element={<CrearCuenta setUsuarioLogeado={setUsuarioLogeado}/>}></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;