import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";

const CrearCuenta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //enviar la petición al API
  };

  return (
    <Container className="my-5 mainSection">
      <h1>Crear Cuenta</h1>
      <hr />
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Control
            required
            type="text"
            className="text-center mt-5"
            placeholder="Nombre completo"
            {...register("nombreCrearUsuario", {
              required: "El nombre del usuario es requerido",
              minLength: {
                value: 2,
                message: "La mínima cantidad de caracteres es de 2",
              },
              maxLength: {
                value: 100,
                message: "La máxima cantidad de caracteres es de 100",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreCrearUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            type="email"
            className="text-center mt-5"
            placeholder="Email"
            {...register("emailCrearUsuario", {
              required: "El email es requerido",
              minLength: {
                value: 10,
                message: "El Email debe requerir como mínimo 10 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El Email debe requerir como máximo 100 caracteres",
              },
              pattern:{value:/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ , message:'Ingrese un Email válido'}
            })}
          />
          <Form.Text className="text-danger">{errors.emailCrearUsuario?.message}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            type="text"
            className="text-center mt-5"
            placeholder="Contraseña"
            {...register('contraseniaCrearUsuario', {
              required:'La contraseña es requerida',
              minLength:{value: 5, message:'Debe introducir una contraseña mayor a 5 caracteres'},
              maxLength:{value: 50, message:'Debe introducir una contraseña menor a 50 caracteres'}
            })}
          />
          <Form.Text className="text-danger">{errors.contraseniaCrearUsuario?.message}</Form.Text>
        </Form.Group>
        <Button type="submit" variant="success" className="w-100 mt-5">
          Crear
        </Button>
      </Form>
    </Container>
  );
};

export default CrearCuenta;
