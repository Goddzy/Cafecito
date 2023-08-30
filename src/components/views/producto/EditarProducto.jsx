import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { editarProductoAPI, obtenerProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { _id } = useParams();
  const navegacion = useNavigate();
  useEffect(() => {
    obtenerProductoAPI(_id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("nombreProducto", respuesta.dato.nombreProducto);
        setValue("precio", respuesta.dato.precio);
        setValue("imagen", respuesta.dato.imagen);
        setValue("categoria", respuesta.dato.categoria);
      }
    });
  }, []);

  const onSubmit = (datos) => {
    //pedir a la API (PUT) actualizar el producto con los datos
    editarProductoAPI(_id, datos).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire("Producto editado", "El producto fue modificado", "success");
        navegacion("/administrar");
      } else {
        Swal.fire("Error", "El producto no pudo ser modificado", "error");
      }
    });
  };

  return (
    <Container className="my-5 mainSection">
      <h1>Editar productos</h1>
      <hr />
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              required
              type="text"
              {...register("nombreProducto", {
                required: "El nombre del producto es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad mínima de caracteres debe ser de dos",
                },
                maxLength: {
                  value: 100,
                  message: "La cantidad máxima de caracteres debe ser de cien",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              required
              type="number"
              {...register("precio", {
                required: "El precio es un valor obligatorio",
                min: {
                  value: 10,
                  message: "El precio mínimo debe ser de 10 pesos",
                },
                max: {
                  value: 10000,
                  message: "El precio máximo debe ser de 10000 pesos",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              required
              type="text"
              {...register("imagen", {
                required: "la URL de la imagen es obligatoria",
                pattern: {
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message: "URL incorrecta",
                  minLength: {
                    value: 10,
                    message: "La cantidad mínima de caracteres debe ser de 10",
                  },
                  maxLength: {
                    value: 300,
                    message:
                      "La cantidad máxima de caracteres debe ser de 300",
                  },
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="12 mt-5 mb-3">
            <Form.Select
              {...register("categoria", {
                required: "Debe seleccionar una categoría",
              })}
            >
              <option value="">Seleccione una opción...</option>
              <option value="bebida caliente">Bebida caliente</option>
              <option value="bebida fria">Bebida fría</option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
        </Row>
        <Button type="submit" variant="success" className="w-100">
          Editar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarProducto;
