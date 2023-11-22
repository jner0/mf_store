import { Navigate, Route, Routes } from "react-router-dom";
import {
  ArticulosPage,
  ClientesPage,
  CreateClientePage,
  InitialPage,
  OrdenesPage,
} from "../pages";

export const StoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/clientes" element={<ClientesPage />} />
      <Route path="/articulos" element={<ArticulosPage />} />
      <Route path="/ordenes" element={<OrdenesPage />} />
      <Route path="/nuevo-cliente" element={<CreateClientePage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
