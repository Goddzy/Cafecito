import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";

const CrearProducto = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();

  const onSubmit = (data) => {
    //enviar la petición a la API
    
  };

  return (
    <Container className="my-5 mainSection">
      <h1>Agregar productos</h1>
      <hr />
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              required
              type="text"
              {...register("nombreProducto", {
                required: 'El nombre del producto es un dato obligatorio',
                minLength:{value:2, message:'La cantidad mínima de caracteres debe ser de dos'},
                maxLength:{value:100, message:'La cantidad máxima de caracteres debe ser de cien'}
              })}
            />
            <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Precio</Form.Label>
            <Form.Control required type="number" 
            {...register('precio', {
               required: 'El precio es un valor obligatorio',
               min:{value:10, message:'El precio mínimo debe ser de 10 pesos'},
               max:{value:10000 , message: 'El precio máximo debe ser de 10000 pesos'}
            })}
            />
            <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control required type="text" 
            {...register('imagen',
            {required: 'la URL de la imagen es obligatoria',
             pattern:{value:/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/, message:'URL incorrecta'}
          },
            
            )}
            />
            <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="12 mt-5 mb-3">
            <Form.Select {...register('categoria',
            {required:'Debe seleccionar una categoría',
          }
            )}>
              <option value="">Seleccione una opción...</option>
              <option value="bebida caliente">Bebida caliente</option>
              <option value="bebida fria">Bebida fría</option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
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
