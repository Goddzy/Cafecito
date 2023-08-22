const URL = process.env.REACT_APP_API_CAFECITO;
//Peticiones
//GET(devuelve información del API)
//POST (crear un nuevo producto/usuario etc.)
//PUT (sirve para modificar un producto/usuario etc.)
//DELETE (sirve para borrar un producto/usuario etc.)

export const consultarAPI = async()=>{
  //peticion para obtener todos los productos
  try{
    const respuesta = await fetch(URL);
    const listaProductos = await respuesta.json();
    return listaProductos;

  }catch(error){
    console.log(error);
    return false;
  }
}