import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = () => {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Brownie </td>
        <td>$300</td>
        <td>https://cdn4.buysellads.net/uu/1/138663/1691181987-Carbon_A.png</td>
        <td>Dulce</td>
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
