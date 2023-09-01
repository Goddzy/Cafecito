import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const InicioSesion = ({setUsuarioLogeado}) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then((respuesta)=>{
      console.log(respuesta)
      if (respuesta){
        localStorage.setItem('usuarioCreadoKey', JSON.stringify(respuesta));
        setUsuarioLogeado(respuesta);
        Swal.fire('Listo!', 'Ha iniciado sesión correctamente', 'success')
        navigate('/');
      }else{Swal.fire('El usuario no existe', 'Error en el nombre de usuario o contraseña', 'error')}
    })
  };

  return (
    <Container className="mt-5 mainSection">
      <h1>Iniciar Sesión</h1>
      <hr />
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Control
            required
            type="email"
            className="text-center mt-5"
            placeholder="Email"
            {...register("iniciarSesionEmail", {
              required: "El email es requerido",
              minLength: {
                value: 10,
                message: "El Email debe requerir como mínimo 10 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El Email debe requerir como máximo 100 caracteres",
              },
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: "Ingrese un Email válido",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.iniciarSesionEmail?.message}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            type="password"
            className="text-center mt-5"
            placeholder="Contraseña"
            {...register("iniciarSesionContrasenia", {
              required: "La contraseña es requerida",
              minLength: {
                value: 5,
                message: "Debe introducir una contraseña mayor a 5 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe introducir una contraseña menor a 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.iniciarSesionContrasenia?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success" className="w-100 mt-5">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default InicioSesion;
