import React from "react";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";

const Home = () => {
  return (
    <main>
      {/* Navbar Component*/}
      <Navbar />
      {/* Pokemon List Component*/}
      <PokemonList />
    </main>
  );
};

export default Home;
