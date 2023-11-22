import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useClientes } from "../../hooks/useClientes";
import { NavBar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export const ClientesPage = () => {
  const { clientes, refetch, eliminarCliente } = useClientes();
  const navigate = useNavigate();
  const handleNavigateToNuevoCliente = () => {
    navigate("/nuevo-cliente");
  };

  const handleEliminarCliente = (clienteId) => {
    if (window.confirm("¿Estás seguro de eliminar este cliente?")) {
      eliminarCliente(clienteId);
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <h1>Clientes</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellidos</TableCell>
                <TableCell>Dirección</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>UID</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes?.clientes?.map((cliente) => (
                <TableRow key={cliente?.uid}>
                  <TableCell>{cliente?.nombre}</TableCell>
                  <TableCell>{cliente?.apellidos}</TableCell>
                  <TableCell>{cliente?.direccion}</TableCell>
                  <TableCell>{cliente?.correo}</TableCell>
                  <TableCell>{cliente?.telefono}</TableCell>
                  <TableCell>{cliente?.uid}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleEliminarCliente(cliente?.uid)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={refetch}>Recargar datos</Button>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleNavigateToNuevoCliente}
          style={{ marginTop: "10px" }}
        >
          Crear Cliente
        </Button>
      </div>
    </>
  );
};
