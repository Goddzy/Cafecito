import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { crearUsuariosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CrearCuenta = () => {
  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    crearUsuariosAPI(data).then((respuesta)=>{
      console.log(respuesta);
       if(respuesta.status === 201){
         reset();
         Swal.fire('Su cuenta ha sido creada', 'Ya puede iniciar sesión', 'success')
         navegacion('/')
       }else{Swal.fire('Ocurrió un error','Intente este proceso más tarde' , 'error')}

    })
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
            type="password"
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
