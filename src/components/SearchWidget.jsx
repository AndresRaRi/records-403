import React from "react";
import { InputBase, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchWidget = () => {
  return (
    <Box>
      <InputBase placeholder="Buscar en Records 403"></InputBase>
      <Button color="inherit">
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchWidget;
