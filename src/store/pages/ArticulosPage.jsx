import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useArticulos } from "../../hooks/useArticulos";
import { NavBar } from "../components/Navbar";

export const ArticulosPage = () => {
  const { articulos, refetch } = useArticulos();
  return (
    <>
      <NavBar />
      <div>
        <h1>Articulos</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Precio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articulos?.articulos?.map((articulos) => (
                <TableRow key={articulos._id}>
                  <TableCell>{articulos.nombre}</TableCell>
                  <TableCell>{articulos.descripcion}</TableCell>
                  <TableCell>{articulos.precio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <button onClick={refetch}>Recargar datos</button>
      </div>
    </>
  );
};
