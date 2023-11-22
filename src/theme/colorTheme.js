import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const colorTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },

    secondary: {
      main: "#1a1c20",
    },

    error: {
      main: red.A400,
    },
  },
});
