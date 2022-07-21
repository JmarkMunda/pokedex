import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import axios from "axios";
import { PokeContext } from "../context/GlobalContext";
import { useLocation } from "react-router-dom";

// Custom Styles ---------------------------------
const PokemonImage = styled("img")`
  width: 300px;
  height: 15rem;
  margin: 0 4rem 4rem 0;
  object-fit: cover;
`;

const DetailsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
`;

const TextContainer = styled(Stack)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Icon = styled("span")`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Text = styled("h3")`
  padding: 0 1rem;
  border-right: 2px solid #dce9dd;
  color: #5d615d;
`;

const Stats = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
// ----------------------------------------------

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
      <DetailsContainer>
        <Stack direction={"row"}>
          {/* Pokemon Image */}
          {Object.keys(pokeDetails).length !== 0 && (
            <PokemonImage src={pokeDetails.sprites.front_default} />
          )}
          {/* Pokemon Name */}
          <Stack direction={"column"}>
            <TextContainer>
              {pokeDetails.forms &&
                pokeDetails.forms.map((data, index) => (
                  <h1 key={index}>{data.name}</h1>
                ))}
            </TextContainer>
            {/* Pokemon Type */}
            <TextContainer>
              <Icon>
                <ArrowRightOutlinedIcon />
                <h3>Type:</h3>
              </Icon>
              {pokeDetails.types &&
                pokeDetails.types.map((data, index) => {
                  const { type } = data;
                  return <Text key={index}>{type.name}</Text>;
                })}
            </TextContainer>
            {/* Pokemon Type */}
            <TextContainer>
              <Icon>
                <ArrowRightOutlinedIcon />
                <h3>Abilities:</h3>
              </Icon>
              {pokeDetails.abilities &&
                pokeDetails.abilities.map((data, index) => {
                  const { ability } = data;
                  return <Text key={index}> {ability.name}</Text>;
                })}
            </TextContainer>
          </Stack>
        </Stack>
        {/* Pokemon Stats */}
        <Stack direction={"column"}>
          <Icon>
            <ArrowRightOutlinedIcon />
            <h3>Stats:</h3>
          </Icon>
          <Stats>
            {pokeDetails.stats &&
              pokeDetails.stats.map((data, index) => {
                const { base_stat, stat } = data;
                return (
                  <Text key={index}>
                    {stat.name}: {base_stat}
                  </Text>
                );
              })}
          </Stats>
        </Stack>
      </DetailsContainer>
    </>
  );
};

export default Pokemon;
