import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#FF5349" }}>
      <Toolbar>
        <h4>Pokedex</h4>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
