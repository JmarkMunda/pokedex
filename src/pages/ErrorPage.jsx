import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const MainErrorPage = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10rem;
`;

const ErrorPage = () => {
  return (
    <MainErrorPage>
      <h1>404 Page not found!</h1>
    </MainErrorPage>
  );
};

export default ErrorPage;
