import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { Box, Container, Stack } from "@mui/material";
import axios from "axios";
import { PokeContext } from "../context/GlobalContext";
import { Outlet, Link } from "react-router-dom";

const PokemonContainer = styled(Container)`
  margin-top: 2rem;
`;

const PokemonItem = styled(Link)`
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 1px 1px 4px #6d6d6d;
  text-decoration: none;
  color: #ffa600;
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: #ff5349;
  }
`;

const API = `https://pokeapi.co/api/v2/pokemon`;

const PokemonList = () => {
  const { pokeList, setPokeList } = useContext(PokeContext);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const data = await axios.get(API);
        setPokeList(data.data.results);
      } catch (error) {
        console.log("Fetching API: " + error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <PokemonContainer>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
        gap={4}>
        {/* List of Pokemons */}
        {pokeList !== 0 &&
          pokeList.map((data, index) => {
            const { name, url } = data;
            return (
              <PokemonItem key={index} to={"/pokemon"} state={{ url }}>
                <h3>{name}</h3>
              </PokemonItem>
            );
          })}
      </Stack>
      <Outlet />
    </PokemonContainer>
  );
};

export default PokemonList;
