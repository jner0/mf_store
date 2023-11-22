import { Route, Routes } from "react-router-dom";
import { StoreRoutes } from "../store";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<StoreRoutes />} />
    </Routes>
  );
};
