import storeApi from "../api/storeApi";

export const getClients = async () => {
  try {
    const { data } = await storeApi.get("/clientes");
    return data;
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    throw error;
  }
};

export const getArticulos = async () => {
  try {
    const { data } = await storeApi.get("/articulos");
    return data;
  } catch (error) {
    console.error("Error al obtener Articulos:", error);
    throw error;
  }
};

export const getOrdenes = async () => {
  try {
    const { data } = await storeApi.get("/ordenes");
    return data;
  } catch (error) {
    console.error("Error al obtener Ordenes:", error);
    throw error;
  }
};

export const postCliente = async (data) => {
  try {
    const response = await storeApi.post("/clientes", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear cliente:", error);
    throw error;
  }
};

export const deleteCliente = async (clienteId) => {
  try {
    const response = await storeApi.delete(`/clientes/${clienteId}`);
    return response.data;
  } catch (error) {
    console.error(`Error al eliminar cliente con ID ${clienteId}:`, error);
    throw error;
  }
};
