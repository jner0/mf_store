import { useEffect, useState } from "react";
import {
  deleteCliente,
  getClients,
  postCliente,
} from "../services/storeService";

export const useClientes = () => {
  const [clientes, setClientes] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getClients();
      setClientes(data);
    } catch (error) {
      console.error("Error al obtener clientes:", error);
    }
  };

  const crearCliente = async (nuevoCliente) => {
    try {
      await postCliente(nuevoCliente);
      fetchData();
    } catch (error) {
      setError(error);
    }
  };

  const eliminarCliente = async (clienteId) => {
    try {
      await deleteCliente(clienteId);
      fetchData();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    clientes,
    refetch: fetchData,
    crearCliente,
    eliminarCliente,
  };
};
