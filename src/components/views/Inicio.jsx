import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";

const Inicio = () => {
  const [productosInicio, setProductosInicio] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setProductosInicio(respuesta);
    });
  }, []);

  return (
    <Container className="mainSection">
      <h1 className="mt-5">Página principal</h1>
      <hr />
      <Row>
        {productosInicio.map((producto) => (
          <CardProducto producto={producto} key={producto.id}></CardProducto>
        ))}
      </Row>
    </Container>
  );
};

export default Inicio;
