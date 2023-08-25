import { Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProducto = ({producto}) => {
  return (
    <Col md="3">
      <Card className="my-3">
        <img src={producto.imagen} alt="producto"/>
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>
            {producto.descripcion}
            <span className="badge badge-rounded-pill bg-primary">${producto.precio}</span>
          </Card.Text>
          <Link
            to={`/administrar/detalle/${producto.id}`}
            variant="warning"
            className="btn btn-warning me-1 mb-1"
          >
            Ver más
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
