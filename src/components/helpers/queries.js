const URL = process.env.REACT_APP_API_CAFECITO;
//Peticiones
//GET(devuelve información del API)
//POST (crear un nuevo producto/usuario etc.) En los Login también puedo usar un POST.
//PUT (sirve para modificar un producto/usuario etc.)
//DELETE (sirve para borrar un producto/usuario etc.)

//petición GET
export const consultarAPI = async () => {
  //peticion para obtener todos los productos
  try {
    const respuesta = await fetch(URL);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//petición POST
export const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//petición DELETE
export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
