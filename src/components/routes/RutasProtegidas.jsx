import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
  const token = JSON.parse(localStorage.getItem('usuarioCreadoKey')) || null;
  //el token tiene algo o tiene nulo?
  if(!token){
    //si el token está vacío
    return <Navigate to={'/administrar/iniciarSesion'}></Navigate>
  }else{
    return children;
  }
};

export default RutasProtegidas;