import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const StoreApp = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  );
};
