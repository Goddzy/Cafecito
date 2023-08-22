import { Container, Row } from "react-bootstrap";
import CardProducto from './producto/CardProducto'

const Inicio = () => {
  return (
    <Container className="mainSection">
      <h1 className="mt-5">Página principal</h1>
      <hr/>
      <Row>
        <CardProducto></CardProducto>
      </Row>
    </Container>
  );
};

export default Inicio;
