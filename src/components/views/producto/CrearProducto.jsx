import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const CrearProducto = () => {
  return (
    <Container className="my-5 mainSection">
      <h1>Agregar productos</h1>
      <hr />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control required type="text" />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Precio</Form.Label>
            <Form.Control required type="number" />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control required type="text" />
          </Form.Group>
          <Form.Group as={Col} md="12 mt-5 mb-3">
            <Form.Select>
              <option value={""}>Seleccione Una opción...</option>
              <option value={"bebidaCaliente"}>Bebida caliente</option>
              <option value={"dulce"}>Dulce</option>
              <option value={"salado"}>Salado</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button type="submit" variant="success" className="w-100">
          Crear
        </Button>
      </Form>
    </Container>
  );
};

export default CrearProducto;
