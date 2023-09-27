import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import DiscFullIcon from "@mui/icons-material/DiscFull";
import CartWidget from "./CartWidget";
import SearchWidget from "./SearchWidget";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" style={{ background: '#ff9100' }}>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            aria-label="logo"
          >
            <DiscFullIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            Records 403
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button color="inherit">Registrarse</Button>
            <Button color="inherit">Iniciar Sesión</Button>
            <SearchWidget />
            <CartWidget />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
