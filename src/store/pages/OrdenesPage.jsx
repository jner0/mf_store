import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useOrdenes } from "../../hooks/useOrdenes";
import { NavBar } from "../components/Navbar";

export const OrdenesPage = () => {
  const { ordenes, refetch } = useOrdenes();

  return (
    <>
      <NavBar />
      <div>
        <h1>Ordenes</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Articulo</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordenes?.ordenes?.map((ordenes) => (
                <TableRow key={ordenes._id}>
                  <TableCell>{ordenes?.articulo?.nombre}</TableCell>
                  <TableCell>{ordenes?.cliente?.nombre}</TableCell>
                  <TableCell>{ordenes?.fecha}</TableCell>
                  <TableCell>{ordenes?.total}</TableCell>
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
