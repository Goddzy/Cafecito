import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
const DetalleProducto = () => {
  return (
    <Container className="mainSection">
      <Card className="Container border rounded my-5 flex-row">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="start"
              className="w-100"
              height={300}
              src="https://clarin.com/img//2022/05/24/KEaLLgGNb_1200x630__1.jpg"
              alt="producto"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Titulo del producto</Card.Title>
              <hr />
              <Card.Text>
                <span className="ml-3 badge badge-rounded-pill bg-primary">
                  $Precio
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
