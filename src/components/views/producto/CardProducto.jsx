import { Col, Button, Card } from "react-bootstrap";
const CardProducto = () => {
  return (
    <Col md="3">
      <Card className="my-3">
        <img src="https://clarin.com/img//2022/05/24/KEaLLgGNb_1200x630__1.jpg" alt="producto"/>
        <Card.Body>
          <Card.Title>Titulo del producto</Card.Title>
          <Card.Text>
            Descripción breve del producto
            <span className="badge badge-rounded-pill bg-primary">$Precio</span>
          </Card.Text>
          <Button variant="warning">Ver más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
