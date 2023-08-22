const URL = process.env.REACT_APP_API_CAFECITO;

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