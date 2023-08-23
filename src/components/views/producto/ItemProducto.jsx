import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "Seguro que quiere borrar el producto?",
      text: "No será capaz de revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProductoAPI(producto.id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Producto borrado",
              "el producto fue correctamente borrado",
              "success"
            );
            //cuando eliminé el producto, busco todos los productos existentes en ese instante de tiempo
            consultarAPI().then((arregloProductos) => {
              //actualizo el set de productos de Administrador con los datos que hay en la API
              setProductos(arregloProductos);
            });
          } else {
            Swal.fire(
              "Ocurrió un error",
              "Intente la operación en unos minutos",
              "error"
            );
          }
        });
        Swal.fire("Listo", "Su producto ha sido borrado", "success");
      }
    });
  };

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
          <Button variant="btn btn-danger mb-1" onClick={borrarProducto}>
            Borrar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ItemProducto;
