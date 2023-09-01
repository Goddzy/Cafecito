import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("usuarioCreadoKey");
    setUsuarioLogeado({});
    navigate("/");
  };

  return (
    <Navbar expand="lg" bg="danger" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cafecito
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-item nav-link"}>
              Inicio
            </NavLink>

            {usuarioLogeado.nombreCrearUsuario ? (
              <>
                <NavLink end to="/administrar" className={"nav-item nav-link"}>
                  Administrador
                </NavLink>
                <NavLink end
                  to="/administrar/crearCuenta"
                  className={"nav-item nav-link"}
                >
                  Crear cuenta
                </NavLink>
                <Button variant="danger" onClick={cerrarSesion}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end
                to="/administrar/iniciarSesion"
                className={"mb-auto nav-item nav-link"}
              >
                Iniciar sesión
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
