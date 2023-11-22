import { useEffect, useState } from "react";
import { getArticulos } from "../services/storeService";

export const useArticulos = () => {
  const [articulos, setArticulos] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getArticulos();
      setArticulos(data);
    } catch (error) {
      console.error("Error al obtener Articulos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    articulos,
    refetch: fetchData,
  };
};
