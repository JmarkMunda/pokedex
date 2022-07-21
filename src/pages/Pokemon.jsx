import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { PokeContext } from "../context/GlobalContext";
import { Container } from "@mui/system";

const ItemContainer = styled(Container)`
  cursor: pointer;
  background-color: gray;
  margin-top: 2rem;
`;

const Pokemon = () => {
  const { pokeDetails, setPokeDetails } = useContext(PokeContext);
  const location = useLocation();
  const { url } = location.state;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await axios.get(url);
        setPokeDetails(data.data);
      } catch (error) {
        console.log("Fetch Pokemon Details:" + error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <>
      <Navbar />
      <ItemContainer>
        {/* Pokemon Name */}
        {pokeDetails.forms !== 0 &&
          pokeDetails.forms.map((data) => <h3>{data.name}</h3>)}
      </ItemContainer>
    </>
  );
};

export default Pokemon;
