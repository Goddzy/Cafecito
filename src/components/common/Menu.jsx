import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
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
                <NavLink to="/administrar" className={"nav-item nav-link"}>
                  Administrador
                </NavLink>
                <NavLink
                  to="/administrar/crearCuenta"
                  className={"nav-item nav-link"}
                >
                  Crear cuenta
                </NavLink>
                <NavLink
                  to="/administrar/crearCuenta"
                  className={"nav-item nav-link"}
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <NavLink
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
