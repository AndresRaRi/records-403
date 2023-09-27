import React from "react";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <>
      <IconButton color="inherit">
        Tu Carrito
        <ShoppingCartIcon />
        10
      </IconButton>
    </>
  );
}

export default CartWidget; 
