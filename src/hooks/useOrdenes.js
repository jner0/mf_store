import { useEffect, useState } from "react";
import { getOrdenes } from "../services/storeService";

export const useOrdenes = () => {
  const [ordenes, setOrdenes] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getOrdenes();
      setOrdenes(data);
    } catch (error) {
      console.error("Error al obtener Ordenes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    ordenes,
    refetch: fetchData,
  };
};
