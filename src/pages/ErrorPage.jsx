import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// Custom Styles -------------------------
const MainErrorPage = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10rem;
  width: 100%;
  height: 100vh;
  background-color: #ff5349;
  color: #fff;
`;
// ---------------------------------------

const ErrorPage = () => {
  return (
    <MainErrorPage>
      <h1>404 Page not found!</h1>
      <Link to="/" style={{ color: "#fff", marginTop: "1rem" }}>
        Go back to Homepage
      </Link>
    </MainErrorPage>
  );
};

export default ErrorPage;
