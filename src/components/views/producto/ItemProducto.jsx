import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = ({producto}) => {
  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.nombreProducto}</td>
        <td>${producto.precio}</td>
        <td>{producto.imagen}</td>
        <td>{producto.categoria}</td>
        <td>
          <Link
            to="/administrar/editar/:id"
            variant="warning"
            className="btn btn-warning me-1 mb-1"
          >
            Editar
          </Link>
          <Button variant="btn btn-danger mb-1">Borrar</Button>
        </td>
      </tr>
    </>
  );
};

export default ItemProducto;
