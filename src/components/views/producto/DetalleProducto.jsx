import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useParams} from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";

const DetalleProducto = () => {
  const { idDetalle } = useParams();
  const [datos, setDatos] = useState({ imagen: "", nombreProducto: "", precio: 0 })

  useEffect(()=>{
    obtenerProductoAPI(idDetalle).then((respuesta)=>{
      if(respuesta.status === 200){
        setDatos({imagen: respuesta.dato.imagen, nombreProducto: respuesta.dato.nombreProducto, precio: respuesta.dato.precio})
      }
    })
  }, [])

  return (
    <Container className="mainSection">
      <Card className="Container border rounded my-5">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="start"
              className="w-100"
              height={400}
               src= {datos.imagen}
              alt={datos.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title><h1>{datos.nombreProducto} <span className="ml-3 badge badge-rounded-pill bg-secondary">
                  ${datos.precio}
                </span></h1></Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
