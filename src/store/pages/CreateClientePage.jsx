import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useClientes } from "../../hooks/useClientes";
import { useState } from "react";
import { NavBar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export const CreateClientePage = () => {
  const { crearCliente } = useClientes();
  const navigate = useNavigate();

  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    correo: "",
    telefono: "",
  });

  const handleCrearCliente = async () => {
    try {
      await crearCliente(nuevoCliente);
      console.log("Cliente creado exitosamente");
      navigate("/clientes");
      // Realizar cualquier otra acción después de crear el cliente
    } catch (error) {
      console.error("Error al crear cliente:", error);
      // Manejar el error de alguna manera
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoCliente((prevCliente) => ({ ...prevCliente, [name]: value }));
  };

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
          <Typography variant="h5" align="center">
            Crear Cliente
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  variant="outlined"
                  value={nuevoCliente?.nombre}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Apellidos"
                  name="apellidos"
                  variant="outlined"
                  value={nuevoCliente?.apellidos}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Dirección"
                  name="direccion"
                  variant="outlined"
                  value={nuevoCliente?.direccion}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Correo"
                  name="correo"
                  variant="outlined"
                  value={nuevoCliente?.correo}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Teléfono"
                  name="telefono"
                  variant="outlined"
                  value={nuevoCliente?.telefono}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleCrearCliente}
              style={{ marginTop: "20px" }}
            >
              Crear Cliente
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};
