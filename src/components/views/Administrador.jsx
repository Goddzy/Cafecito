import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemProducto from "./producto/ItemProducto";
import { useEffect } from "react";
import { consultarAPI } from "../helpers/queries";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    return () => {
      consultarAPI().then((respuesta)=>{
        setProductos(respuesta);
        
      })
    };
  }, []);

  return (
    <Container className="mainSection">
      <article className="d-flex justify-content-between align-items-center">
        <h1 className="mt-5">Administrar productos</h1>
        <Link to="/administrar/crear" className="mt-5 h-100 btn btn-primary">
          Agregar
        </Link>
      </article>
      <hr />
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL imagen</th>
            <th>Categoría</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto)=><ItemProducto producto={producto} key={producto.id} setProductos={setProductos}></ItemProducto>)}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
