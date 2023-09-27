import React from "react";
import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchWidget = () => {
  return (
    <>
      <InputBase></InputBase>
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
    </>
  );
}

export default SearchWidget; 
