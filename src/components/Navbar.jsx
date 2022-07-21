import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const LogoLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#FF5349" }}>
      <Container>
        <Toolbar>
          <LogoLink to="/">
            <h2>Pokedex</h2>
          </LogoLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
