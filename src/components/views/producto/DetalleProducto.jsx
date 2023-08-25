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
      <Card className="Container border rounded my-5 flex-row">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="start"
              className="w-100"
              height={300}
               src= {datos.imagen}
              alt={datos.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title><h2>{datos.nombreProducto}</h2></Card.Title>
              <Card.Text>
                <span className="ml-3 badge badge-rounded-pill bg-primary">
                  ${datos.precio}
                </span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
