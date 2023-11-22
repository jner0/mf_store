import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "Clientes",
    path: "/clientes",
  },
  {
    title: "Articulos",
    path: "/articulos",
  },
  {
    title: "Ordenes",
    path: "/ordenes",
  },
];

export const NavBar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container fixed>
          <Toolbar>
            {/* <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h9" sx={{ flexGrow: 1 }}>
              Store
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navLinks.map((item) => (
                <Button
                  color="inherit"
                  key={item.title}
                  component="a"
                  href={item.path}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
