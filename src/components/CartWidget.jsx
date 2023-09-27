import React from "react";
import { Box, Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Box>
      <Button color="inherit">
        Tu carrito
        <Badge badgeContent={50} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </Box>
  );
};

export default CartWidget;
