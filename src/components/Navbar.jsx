import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import CartWidget from "./CartWidget";
import SearchWidget from "./SearchWidget";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Records 403</Button>
          <Button color="inherit">Registrarse</Button>
          <Button color="inherit">Iniciar Sesión</Button>

          <CartWidget />
          <SearchWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
